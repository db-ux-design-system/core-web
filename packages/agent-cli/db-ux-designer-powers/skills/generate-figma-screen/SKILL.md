---
name: "generate-figma-screen"
description: "Generates DB UX Design System v3-compliant Figma screens from a prompt — using only official components, bound variables, and registered text styles — via a validated Composition Plan and a hardened render runtime."

triggers:
    - "DB Designer:"
    - "generate a Figma screen"
    - "build a Figma dashboard"
    - "design a screen in Figma"
    - "create a Figma layout with DB UX"
    - "erstelle einen Figma Screen"
    - "erstelle ein Dashboard"
    - "erstelle eine Contentpage"
    - "baue mir einen Screen"
    - "baue mir ein Dashboard"
    - "entwirf einen Screen"
    - "entwirf ein Dashboard"
    - "figma screen"
    - "figma dashboard"
    - "figma layout"

inputs:
    - name: description
      type: string
      required: true
      description: "What to build (e.g. 'a small dashboard for the Design System KPIs')."
    - name: figma_target
      type: string
      required: true
      description: "Figma design URL WITH a node-id (the page/frame to render onto). If missing, STOP and ask for it."
    - name: concept_components
      type: boolean
      required: false
      description: "Allow Concept components (Core Lab, not in code). Default false. If needed, ask once before using."

requires:
    - context: context/design-system/screen-guidelines.md
      autoLoad: true
    - context: context/general/layout-guidelines.md
      autoLoad: true
    - context: context/general/design-laws.md
    # Per-layout-type design principles (load the one matching the detected page type — Phase 2).
    - context: context/general/layout-type-guidelines/dashboard.md
    - context: context/general/layout-type-guidelines/form.md
    - context: context/general/layout-type-guidelines/process.md
    - context: context/general/layout-type-guidelines/modal.md
    - asset: assets/db-figma-runtime.min.js
    - asset: assets/build-runtime.cjs
    # Runtime source is split into modules under assets/src/ (concatenated by the build).
    - asset: assets/build-registry-maps.cjs
    # Store-once bootstrap (PREFERRED render path — see Phase 4a).
    - asset: assets/bootstrap/manifest.json
    - asset: assets/bootstrap/check.js
    - asset: assets/bootstrap/render.js
    - asset: assets/bootstrap/store-meta.js
    - asset: assets/registries/tokens.json
    - asset: assets/registries/components.json
    # Icon name → DB Theme Icons key (comfort layer for { type:"Icon", name:"..." }).
    - asset: assets/registries/icons.json
    # Content-driven selection layer (per page type): map content → section → order.
    # Page-type catalogs. EXACTLY three files per type, enforced by assets/validate-registries.cjs.
    - asset: assets/registries/dashboard/template.json
    - asset: assets/registries/dashboard/patterns.json
    - asset: assets/registries/dashboard/blocks.json
    - asset: assets/registries/contentpage/template.json
    - asset: assets/registries/contentpage/patterns.json
    - asset: assets/registries/contentpage/blocks.json
    - asset: assets/registries/form/template.json
    - asset: assets/registries/form/patterns.json
    - asset: assets/registries/form/blocks.json
    - asset: assets/registries/process/template.json
    - asset: assets/registries/process/patterns.json
    - asset: assets/registries/process/blocks.json
    - asset: assets/registries/modal/template.json
    - asset: assets/registries/modal/patterns.json
    - asset: assets/registries/modal/blocks.json
    - asset: assets/validate-registries.cjs

tools:
    - db-ux/list_components
    - db-ux/get_component_props
    - db-ux/get_component_details
    - db-ux/list_icons
    - db-ux/list_design_token_categories
    - db-ux/get_design_tokens
    - db-ux/docs_search
    - figma/get_metadata
    - figma/get_design_context
    - figma/get_screenshot
    - figma/get_variable_defs
    - figma/use_figma

outputs:
    - "A DB UX-compliant Figma screen (frame) placed at {figma_target}"
    - "An audit report: { valid, violations }"

on_error:
    max_retries: 3
    actions:
        - log: "Fix the Composition Plan (not the rendered tree) and re-run renderPlan."
        - fallback: "If a required component/variant/token/style is missing, STOP and report. Never approximate."
---

# Generate Figma Screen (DB UX)

## Rule ownership and change routing

Use this routing matrix before changing any guidance. Keep one normative source per rule and
add a short enforcement reference elsewhere only when execution needs an explicit check.

| Change kind                                                   | Normative file                                         | Examples                                                                            |
| ------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Reusable visual, semantic, or component-choice rule           | `context/design-system/screen-guidelines.md`           | Tags for active filters, inline vs. docked Notifications, Badge meaning, icon usage |
| General grouping, spacing, width, or composition law          | `context/general/layout-guidelines.md`                 | spacing hierarchy, container grouping, column behavior                              |
| Page-type-specific composition                                | `context/general/layout-type-guidelines/<pageType>.md` | dashboard bento structure, form grouping, modal composition                         |
| Component/token/icon API or availability                      | `assets/registries/*.json` and live DB UX docs         | valid props, variants, tokens, icon names                                           |
| Agent workflow, preflight, fallback, audit, or stop condition | `SKILL.md`                                             | registry checks, render order, no-prototype rule                                    |
| Runtime implementation behavior                               | `assets/src/*.js`                                      | icon resolution, component instantiation, audit implementation                      |

Decision rule: if the statement describes what a DB-UX screen should mean or look like, put it
in the applicable guideline. If it describes how this agent must compose, validate, or render
that screen, put it in this Skill. Do not create competing copies: update the normative file
first, then add only the minimum enforcement/check reference required by the Skill or runtime.

> **OUTPUT IS ALWAYS A FIGMA FRAME — NEVER HTML, CSS, JSX or any workspace file.**
> The only permitted output is a rendered frame in the Figma file via `use_figma` + `renderPlan`.
> The agent NEVER writes imperative Figma node code — every screen goes through `renderPlan`.
>
> **LIBRARY COMPONENTS ONLY — NEVER a local component from the working file.**
> Every instance comes from a published DB UX library: **Core Components** (Button, Card,
> Section, Input, …), **Core Lab** (`Heading`, `Body`, and the layout primitives `Grid` /
> `Container`) and **DB Theme Icons**. The runtime imports each one by its registry key
> (`importComponentSetByKeyAsync`); there is no local-component path, no `figma.root` page
> scan and no name matching, so a look-alike component sitting in the target file can never be
> picked up instead of the design-system component. If a needed component is not in
> `components.json`, STOP and report the gap — do not substitute something found in the file.
> The audit enforces this: an instance whose main component is local fails with
> `local-component`. Consequence for `Grid` / `Container`: they are Core Lab **Concept**
> components, but — like `Heading` / `Body` — they are BASELINE (no screen can be composed
> without typography and layout), so they do **not** trigger the `{concept_components}` opt-in.
> Any other Concept component still does.

> **NO PROTOTYPING FOR NOW.** Do NOT wire prototype interactions — no `setReactionsAsync`, no
> `reactions`, no `flowStartingPoints`, no navigate/on-click flows between frames. Deliver the
> STATIC frames only. When a request asks to connect frames / build a clickable prototype,
> render the individual frames (each as its own distinct state) and explicitly note that
> prototyping is intentionally out of scope for now. Re-enable only when this rule is lifted.

Turns a prompt into a DB UX-compliant Figma screen. The agent authors a declarative
**Composition Plan (JSON)** and hands it to the hardened **render runtime** (authored as
modules under `assets/src/`, concatenated + minified into `assets/db-figma-runtime.min.js`).

## Pre-Conditions

1. The design context is loaded (autoloaded): `context/design-system/screen-guidelines.md`
   (visual rules), `context/general/layout-guidelines.md` (spacing/grouping),
   `context/general/design-laws.md` (Gestalt). These are the binding VISUAL rules; the
   composition workflow + validation below are the render contract and live in THIS file.
2. A Figma design file with **write** access is connected via the Figma MCP (`use_figma`).
3. `{figma_target}` is a Figma URL with a `node-id`. If not → STOP and ask.
4. The `db-ux` MCP server is connected (live component/token/icon verification).
5. The target file already carries the render runtime, OR you can transfer it verbatim. The
   one-time transfer (10 chunks, ~64 KB, byte-for-byte) needs a large model — if that is not you,
   stop before touching the file and ask the user to switch models. See Phase 4a-gate; the check
   snippet in Phase 4a tells you which case you are in.

## Workflow

### Phase 1 — Resolve target & scope

1. Extract `fileKey` and `node-id` from `{figma_target}`. No `node-id` → STOP, ask.
2. If a Concept component is needed and `{concept_components}` is not enabled → ask once.
   Exception: the four BASELINE Core Lab entries (`Heading`, `Body`, `Grid`, `Container`) are
   always allowed — every screen needs typography and layout (see the library-only rule above).
3. **MODULE vs SCREEN — decide the output shape from the wording.**
    - The user asks for a **"module" / "modules" / "block" / "blocks" / "component"** → render each
      one as its OWN standalone frame with `module: true` (NO Header/shell, no page-zebra check,
      default width = 1024 content column; override `width` per block so it sizes like the block,
      e.g. a stat card ~360, a list panel ~680, a chart panel ~460). ONE `renderPlan` per module →
      SEPARATE frames (a second/third module is a differently-named screen, so the runtime places
      it to the right automatically). A module frame is JUST the block — never wrap it in a Header
      or a full page, otherwise it is just another Example.
    - The user asks for a **"screen" / "page" / "example" / "dashboard" / "content page" / a named
      view** → render ONE full frame WITH the Header shell (the normal page path, `module` unset).
    - When in doubt (e.g. "build me the KPI cards") default to modules (separate header-less frames);
      a single assembled example is only right when the user asks to see the blocks composed together.
    - **A `modal/` (dialog) is the `Dialog` COMPONENT on a screen-sized module frame** — set
      `module: true`, `width` 1440, `height` 1024, and put a SINGLE `{ "type": "Dialog", … }` node
      in `layout`, regardless of whether the prompt says "dialog", "modal", "screen" or "example".
      The Dialog brings its own `Backdrop` and its Popover carries the three regions: `title` →
      header, `children` → body, `actions: { secondary?, primary }` → footer. NO Header shell.
      `plan.overlay` was REMOVED — never rebuild a dialog from a frame + absolute Backdrop +
      centered Card. The dimmed backdrop is a static state; open/close is out of scope.
      See `registries/modal/template.json` → `delivery` + `pageTypeSpecific.frame`.

> **ALWAYS TRACK THE TARGET PAGE BY ID — never rely on the ambient current page.**
> `renderPlan`/`applyEdits` act on `figma.currentPage`, which follows the USER's view and can
> change between calls. If you render/edit without pinning the page, your output can land on (or
> read from) the wrong page, and work on a non-focused page may appear to "vanish". So:
>
> - The `node-id` in `{figma_target}` is the target PAGE (e.g. URL `?node-id=1093-984` → page id
>   `1093:984`). **Remember this id for the WHOLE session** and treat it as the home of every
>   frame you create/edit for this task.
> - Pass it as `plan.targetNodeId` on EVERY `renderPlan`/`applyEdits` call — the runtime then
>   navigates to that page itself (robust, independent of what the user is viewing). Do not
>   substitute manual `setCurrentPageAsync` guesses.
> - When you create additional frames, record their new ids too, and re-resolve by page id (not
>   by "the current page") on every follow-up call.
> - After a render, VERIFY the frame is on the intended page id before proceeding; if it is not
>   there, STOP and report rather than re-rendering blindly.

### Phase 2 — Compose the Plan (content-driven, NOT example-copying)

Compose from the captured catalog per page type — never invent structure.

1.  **Detect the page type** from the prompt's intent:
    - operational / KPIs / incidents / reporting / management overview → **`dashboard/`**
    - product / marketing / event / service / storytelling / informational → **`contentpage/`**
    - data entry / application / registration / booking details / contact / settings / "Formular" →
      **`form/`**
    - multi-step flow / wizard / checkout / onboarding / "Schritte" / "Assistent" (a task split into
      ordered steps with Back/Next) → **`process/`**
    - a short, SELF-CONTAINED task that must BLOCK the current screen and is triggered from within
      it — confirm/cancel, acknowledge/OK, or a tiny form as an overlay: "Dialog", "Modal",
      "Pop-up", "Bestätigung", "möchten Sie wirklich …", "löschen bestätigen", "als Overlay",
      "Drawer", "Side-Sheet" → **`modal/`**. TIE-BREAKER (modal overlaps form/contentpage on
      content — decide by SHAPE, not content): a full data-entry screen the user navigates TO →
      `form/`; a task in ordered Back/Next steps → `process/`; a whole informational page →
      `contentpage/`; an operational overview → `dashboard/`; a NON-blocking inline message → a
      `Notification` inside the relevant type, never a modal. Rule of thumb: continue only by
      dealing with it first, over in one short interaction → `modal/`; a place they go to and work
      in → a full page type. (A modal is ALWAYS delivered as a MODULE frame — see Phase 1.)
    - neither fits → STOP, propose a new page-type catalog, flag `requiresHumanReview: true`.
2.  **Load that page type's catalog** under `registries/<pageType>/` — EXACTLY three files:
    `template.json` (the page grammar: `order`, `slots` with `required`/`position`/`allow`/
    `repeatable`, plus `rules`), `patterns.json` (the complete modules; each pattern carries its
    OWN selection metadata: `intent`, `whenToUse`, `level`, `cardinality`, optional
    `alternatives`) and `blocks.json` (atomic fragments referenced by patterns via `$ref`).
    There is NO `sections.json`, NO `block-patterns.json` and NO `examples.json` — selection
    metadata sits on the pattern, and reference compositions live on the `<PageType> / Example`
    pages in the Figma catalog file, where they cannot be mistaken for a skeleton to copy.
    ALSO load the consolidated human-readable design principles for that type from
    `context/general/layout-type-guidelines/<pageType>.md` when it exists (e.g. `dashboard.md` —
    bento model, data-first, alerts inline, floating-label action rows, spacing/color). It is the
    SOURCE OF TRUTH for the design intent; the registry `_meta` (`spacingModel`, `columnModel`,
    `fieldModel` …) and the pattern `whenToUse` are the same rules made machine-consumable.
3.  **Split the prompt into content groups** (the distinct things to show); each group → one section.
4.  **Map each group to a pattern** via `patterns.json` → `whenToUse` (record the pattern id +
    a one-line reason). Check `alternatives` before settling. Only patterns listed in a
    `template.json` slot's `allow` are placeable at top level; a `level: "module"` pattern is
    reached through another pattern's `$ref`. If nothing fits, you MAY author a new
    guideline-compliant pattern/block rather than force-fit (see step 6) — record why.
5.  **Order the sections** per `template.json` `order` + each slot's `position`, `required` and
    `repeatable`/`minSections`/`maxSections`, and obey `rules` (contentWidth, spacing, action
    hierarchy, "no mono-layout for heterogeneous content").
6.  **Fill each pattern** from its `plan`: copy the fragment, expand `$ref`, fill
    EVERY `<placeholder>` with real content, drop optional nodes (`<...?>`) only when no content
    applies (never an empty Select/Icon/Button), choose within `<a|b|c>`. Prefer the existing
    fragment as-is; restructure or author a new one ONLY when the content genuinely needs it, and
    then keep it guideline-compliant (see "Authoring a new block"). Resolve each action via the
    **Action Hierarchy** below.

        **Authoring a new block/pattern (allowed):** when existing blocks do not cover the need, build
        a new one instead of approximating or forcing a bad fit. Constraints: (a) every `type`/`props`
        MUST resolve in `components.json` and every token in `tokens.json` — components/tokens are
        never invented; (b) structure + spacing MUST follow the page type's `_meta.spacingModel` and
        the rules in `layout-guidelines.md` / `screen-guidelines.md`; (c) mark it `origin:

    "guideline-authored"`. Only STOP for human review when a REQUIRED component/variant/token is
    missing from the live registries (then you cannot build it compliantly).

7.  **Assemble ONE Composition Plan** (PLAN SCHEMA in `assets/src/70-edit-engine.js`): `Header`
    first, then the ordered sections. Reference ONLY registered names from `components.json`,
    `tokens.json`, and the page-type catalogs. Apply the visual rules from
    `screen-guidelines.md` (color/typography/spacing/section structure) and the grouping/spacing
    model from `layout-guidelines.md`.
8.  **Compare the assembled plan against the reference composition BEFORE rendering.** Take ONE
    `figma/get_screenshot` of the `<PageType> / Example` node named in `template.json` `_meta.source`
    and check the plan against it for WHOLE MISSING REGIONS and lost row behaviour: does every row
    the reference spans across the content column also carry `spread: true` in your plan, does every
    content column actually hold content, is every state the reference distinguishes (done / active /
    pending) present in yours? A registry fragment is a TEMPLATE, not a copy — item counts and copy
    will differ legitimately, so do not diff geometry. What you are looking for is the class of
    defect a fragment cannot reveal on its own: a `<placeholder>` region that was dropped instead of
    filled, or a distribution that silently became a left-packed cluster. Fix the plan, then render.

#### Plan shape — the SCREEN vs MODULE branch (STRUCTURE only)

`plan.layout` is a **FLAT ARRAY of top-level nodes** — NOT a wrapper object. There are two
skeletons; pick the one that matches the Phase 1 MODULE-vs-SCREEN decision. Fill the children
from the page-type registries (structure/spacing live there — never hardcode composition here).

- **SCREEN (with Header shell)** — `layout[0]` MUST be the Header, then the ordered Sections:

    ```jsonc
    {
    	"screen": "My Screen", // REQUIRED — frame name
    	"targetNodeId": "1299:4594", // the target PAGE id (Phase 1)
    	"layout": [
    		{
    			"type": "Header",
    			"appName": "DB Regio",
    			"navItems": ["Abfahrten", "Service"]
    		},
    		{
    			"type": "Section",
    			"title": "…",
    			"children": [
    				/* blocks from the registries */
    			]
    		}
    		// …more ordered Sections
    	]
    }
    ```

- **MODULE (standalone block, NO Header)** — set `module: true`, size `width` to the block,
  and put ONLY the block in `layout` (no Header, no page shell):

    ```jsonc
    {
    	"screen": "My Module",
    	"targetNodeId": "1299:4594",
    	"module": true, // → no Header, no page-zebra check
    	"width": 680, // size like the block (e.g. stat card ~360, list panel ~680)
    	"layout": [
    		{
    			"type": "Card",
    			"children": [
    				/* the single block from the registries */
    			]
    		}
    	]
    }
    ```

**Gotchas that fail the render (both branches):**

- `layout` is a flat array. Do NOT wrap it as `{ "type": "Screen", "children": [...] }`.
- The Header node is `{ "type": "Header", "appName": "…", "navItems": [...] }`. `brand` is
  NOT a Header variant — do NOT pass `props: { brand: true }`, and the app name goes in
  `appName`, NOT `label`. (Header `props` only carry the `device` axis, default `desktop`.)
- SCREEN → Header is mandatory as `layout[0]`. MODULE → no Header; omitting `module: true`
  would trigger the page-zebra/Header-first checks and fail the audit.
- **Rendering MANY frames onto one page (a module set, or a multi-frame flow):** pass
  `replace: true` on EVERY call. `replace` is safe + idempotent — it removes ONLY the frame whose
  name matches `screen` (a re-render replaces its own twin in place); if none matches it places a
  NEW frame to the right. It NEVER wipes other frames. So the same loop works for both the first
  render and any re-render. (Use `replaceAll: true` ONLY to deliberately wipe the whole page.)

**Grid and equal-width column rule — mandatory:**

- Use `Grid` only with these live DB UX variants: `"(Def) 33-33-33"`, `"100"`, `"50-50"`,
  `"25-25-25-25"`, `"33-66"`, `"66-33"`, `"25-75"`, `"75-25"`, or `"320-auto"`. Never invent a
  layout such as `"20-20-20-20-20"`; the live Grid component has no five-slot variant and will
  fall back to `"(Def) 33-33-33"`, leaving visible empty Slot placeholders and misaligned content.
- A Grid's child count MUST NOT exceed the number of slots in its selected variant: 3 for
  `"(Def) 33-33-33"`, 4 for `"25-25-25-25"`, 1 for `"100"`, and 2 for the two-column variants.
  Validate this before calling `renderPlan`, not after inspecting the Figma canvas.
- For an arbitrary number of equally wide columns, use a `ContainerHorizontal` with a spacing
  token and one `ContainerVertical` per column, each with `fillWidth: true`. Put badges, links,
  and other hug-sized content inside those fill-width column containers with `hugWidth: true`.
  This is the preferred pattern for five or more values and for repeated dashboard rows.
- For repeated rows, use the same container structure for every row. If strict cross-row column
  alignment or selection is needed, use the official `Table` component instead of forcing a
  multi-slot Grid. Do not use a stale registry fragment merely because it contains a Grid;
  dashboard fragments containing `"20-20-20-20-20"` are legacy examples and MUST be rewritten
  with the container pattern or an official Table before use.
- Preflight every plan recursively before rendering:

    ```js
    const gridSlots = {
    	"(Def) 33-33-33": 3,
    	100: 1,
    	"50-50": 2,
    	"25-25-25-25": 4,
    	"33-66": 2,
    	"66-33": 2,
    	"25-75": 2,
    	"75-25": 2,
    	"320-auto": 2
    };
    // Reject unknown gridLayout values and children.length > gridSlots[gridLayout].
    // For equal-width arbitrary columns, require ContainerHorizontal children with fillWidth.
    ```

- After rendering, verify the effective `Layout` component property, not only the plan string;
  if it differs from the requested variant or falls back to `"(Def) 33-33-33"`, fix the plan
  or use the container pattern and re-render. The audit must reject visible empty slots.

**Chart visualization primitives — mandatory:**

- Canonical dashboard bar graphs use `ChartBar`, never `Image`. A `ChartBar` requires a positive
  `height`, exactly one positive `width` or `fillWidth: true`, a registered fill token, and may
  use a registered radius plus opacity. Compose bars with `ContainerHorizontal` /
  `ContainerVertical` and official `Body` labels; the primitive renders only the bound rectangle.
- **A bar graph is bottom-anchored: one baseline, on the panel floor.** Use the catalog fragments
  as they are — the row is `align: "bottom-left"`, each column `align: "bottom-center"`, and both
  carry `fillHeight: true`, so the block grows into the height its card actually got instead of
  floating under the title. NEVER offset a column with `paddingTop` to fake a baseline, and never
  give the chart row a fixed height. The runtime re-seats every graph after each `renderPlan` and
  `applyEdits` (`anchorChartsToCardBottom`), and the audit rejects `chart-baseline` (staggered bar
  bottoms) and `chart-not-bottom-anchored` (dead space under the graph).
- Determinate goal progress uses `ProgressBar` with a numeric `value` from 0 to 100. Track, segment,
  radius, and semantic coloring remain bound to registered DB UX variables. Do not substitute an
  unknown component, an empty image, or a manually drawn plan shape.
- These primitives are deliberately narrow runtime capabilities for structures present in the
  canonical Figma catalog. They do not authorize arbitrary illustrations, diagrams, or free-form
  vectors; unsupported visualizations still require a real asset, component, or hard stop.

**Image rule — mandatory:**

- A generated layout ships **EMPTY Figma images on Fill**. An `Image` node needs nothing but a
  registered `ratio` (`1:1` | `3:4` | `16:9`); the runtime creates a transparent image asset in
  the target file and sets it as an `IMAGE` fill with `scaleMode: "FILL"`. That is the intended
  deliverable — the designer drops the real asset in afterwards. Do NOT treat an empty image as a
  defect and do NOT try to substitute a drawn rectangle, an icon or a colored surface for it.
- Use a real asset **only when the user explicitly provided one that already lives in the Figma
  file**, and reference it with `imageHash`.
- There is **no `src` option.** `figma.createImageAsync` does not exist in the `use_figma`
  sandbox ("not a supported API"), so an external URL can never be loaded. The registry
  validator rejects `src`.

**Text fields must be named after the component's own TEXT property — mandatory:**

- Every DB component ships its text slots **pre-filled with the library's own copy** ("Headline",
  "Text", "Label", "Link"). So a `text` field that does not resolve to a real TEXT property does
  NOT render an empty line — it renders that default, which reads like product copy and passes a
  purely structural review. A `Notification` carries **`headline`** and **`text`**; passing
  `text: { label, value }` used to leave the headline on canvas as literally "Headline".
- The runtime now **hard-stops** on a field that matches no TEXT property and names the available
  properties in the error, and the audit reports any leftover default as `placeholder-text`. Both
  are fixed in the PLAN (rename the field), never by typing over the rendered text node.
- When unsure which fields a component exposes, read them off the instance
  (`componentProperties`) or use the registry fragment as-is instead of guessing a friendly name.

**Icon and Notification hard constraints — mandatory:**

- **Never use an unknown or guessed icon name.** Before authoring the plan, resolve every icon
  against the live DB Theme Icons library using `db-ux/list_icons` or the registered
  `assets/registries/icons.json`. If an icon is not verified, use a verified alternative or
  omit the optional icon; never rely on the runtime's generic icon placeholder fallback. A
  successful runtime audit does not make an unresolved icon acceptable — visually inspect the
  rendered glyphs and reject any colored `✕`/placeholder icon before reporting success.
- **A Notification in page content uses `placement: "standalone"`.** The registered axes are
  `placement` (`standalone` | `docked` | `overlay`) and `media` (`icon` | `image`) — there is no
  `inline` value and no `variant`/`icon` axis. `standalone` is the in-content form; use `docked`
  only for a notification anchored to the viewport or an application edge. Semantic colour is the
  separate `semantic` field, not a prop. The registry validator checks props against the real
  variant axes, so run it instead of guessing.
- **Active filters must use `Tag`, never `Badge`.** Use the official `Tag` component for
  removable or interactive filter tokens/chips. Reserve `Badge` for non-interactive status,
  priority, or content labels. Preflight every filter row and reject a plan that represents an
  active filter with a `Badge`.

**Dashboard bento, chart width, card gaps and icon slots — mandatory:**

- **Always set `plan.pageType`** to the page type detected in Phase 2 (`dashboard` | `contentpage` |
  `form` | `process` | `modal`). It switches on the page-type-specific audit checks.
- **A dashboard is ONE `Section`.** The canonical DB dashboards are exactly `[Header, Section]`. Put
  the header row, the KPI row, the controls and every panel row INSIDE that single Section, stacked
  in one `ContainerVertical` at gap `md` — that is what produces the bento look. A dashboard
  page-type pattern is a ROW, not a Section: it brings no Section wrapper of its own, and panels
  own their `h4` title instead of getting a per-block `h2` Section. Several Sections on a dashboard
  fail the audit with `dashboard-multi-section`.
- **A card's content gap must never exceed its padding.** `Card spacing: "small"` is 12px padding →
  gap `sm`; `"medium"` is 16px → gap `md`. A `md` gap inside a `small` card is the defect
  `gap-exceeds-card-padding`. Only a full-bleed card (`spacing: "none"`) is exempt, because it
  delegates padding to its rows.
- **Graphs always use the full available width.** Every `ChartBar` is `fillWidth: true` inside
  fill-width column containers — only the bar HEIGHT encodes the value. A fixed bar width fails the
  audit with `chart-fixed-width`.
- **An icon-only Button MUST carry a verified icon.** It has no "Show Icon Leading" boolean and only
  one `Icon <size>` swap slot, so an unset icon leaves the library's `<Icon>` placeholder on canvas
  as an empty ✕ box (audit: `unresolved-icon`). If the action has no fitting verified icon, use a
  labelled Button or drop the action — never ship an empty icon button.
- **A search field carries the magnifier.** Use `iconLeading: "magnifying_glass"` on the search
  `Input` — that is what distinguishes it from a plain text field. `iconLeading`/`iconTrailing` work
  on every component with an icon slot, not just Button, and they set the toggle AND swap the glyph.
- **`fillHeight`/`fillWidth` cannot CREATE space.** They only distribute space a parent already has.
  A vertical FILL inside a HUGGING parent is refused by the runtime rather than collapsing the box to
  0px; if a node needs more height, that comes from its ROW, never from the node itself. Anything
  that still ends up painted outside its box fails the audit with `content-overflow` — the catch-all
  for this whole bug class — or `collapsed-fill-height` for the specific cause.
- **A table's header row has as many FILL cells as its data rows**, the leading `Checkbox` cell
  included, so every value sits under its own header. A single hugging cell shifts everything behind
  it by its own label length; the audit measures the cell edges and reports
  `table-columns-misaligned`. Pagination under a panel is CENTERED (the runtime's default).
- **Active-filter Tags are `emphasis: "weak"`.** They report state and must not compete with the page
  actions (audit: `filter-tag-emphasis`).
- **An empty Grid column is fine, a VISIBLE empty one is not.** Figma paints an unused component slot
  as a magenta placeholder that ships in the render, so the runtime hides leftover cells while
  keeping the column geometry (audit: `empty-grid-cell`).

**Text casing hard constraint — mandatory:**

- **NEVER write plan copy in ALL CAPS.** Write every `content` / `label` / `text` value in normal
  case — Toplines and category labels included: `"Orientierung"`, never `"ORIENTIERUNG"`. This
  applies to plain `Body`/`Heading` text AND to component labels (`Tag`, `Badge`, `Button`,
  `Link`) — a Tag does not upper-case its label, so caps in a Tag come from the plan and stay on
  canvas. A Topline is differentiated by size, weight and color emphasis (`Body` Small + bold +
  `color.text.muted`), never by capitalisation. Established acronyms (DB, ICE, AGB) are fine.
- Do not force casing through Figma's `Text Case` either (no `applyProps` setting UPPER or SMALL
  CAPS). The audit reports `uppercase-text` for both causes; fix the PLAN content and re-render
  instead of patching the rendered text node.

**Action Hierarchy** — resolve each action's kind (brand / filled / link / button-group /
none) via the Action Hierarchy in `screen-guidelines.md` → _Aktionen_. Key constraints: ≤1
`brand` action per page (never one per card); equal items in a grid share ONE kind; navigation
uses a Link, not a button.

**Fallback ladder (never approximate):** a needed block is missing → author a new guideline-
compliant block (see "Authoring a new block") using components/tokens that resolve against the
live registries. Only when that is impossible — no page type fits at all, or a REQUIRED
component/variant/token is missing from the registries — STOP and flag `requiresHumanReview:
true` (propose a new page-type catalog / report the exact registry gap).

### Phase 3 — Validate the Plan

Self-check before rendering:

1. **Registry resolution** (hard stop — report the exact gap, never approximate): every
   component + variant resolves in `components.json`; every color/spacing/radius token + text
   style in `tokens.json`. Blocks/patterns are PREFERABLY reused from the page type's
   `blocks.json` / `patterns.json`; a newly authored block is fine as long as its
   components/tokens resolve here. Run `pnpm --dir packages/agent-cli run registry:validate`
   after ANY registry edit — it is the gate, and it also verifies every `props` combination
   against the real variant axes.
2. **Composition rules**: page type detected; each content group mapped to a section (existing
   or newly authored, id + reason recorded); sections ordered per `template.json` (required
   slots present, `allow` respected, repeat counts within `minSections`/`maxSections`); no
   mono-layout for heterogeneous content; any new block/pattern follows the page type's
   `_meta.spacingModel` and is marked `origin: "guideline-authored"` (no free approximation —
   structure/spacing from the guidelines, components/tokens from the registries).
3. **Visual rules** — per `screen-guidelines.md`: action hierarchy (≤1 brand button/page; equal
   items share one kind; clickable card has ≤1 interactive element); typography ALL via
   Heading/Body (no raw text), weight/color agree, no ALL-CAPS copy (see the casing constraint
   below), heading hierarchy h2 → h3/h4/h5; every
   Section has a title; Header first; first section is canvas level-1 with alternating zebra;
   images use a registered ratio and are EMPTY by default (see the image rule below); icons use
   the `Icon` component.
4. **Runtime audit**: after rendering, `renderPlan(...).audit.valid === true`.
5. (Optional) cross-check live via `db-ux/list_components`, `get_component_props`, `list_icons`.

### Phase 4 — Render via the runtime

Two paths. **Prefer store-once** (keeps render calls tiny).

> **COST RULE — bootstrap ONLY when a render/edit is actively requested.** A re-bootstrap emits
> ~64 KB (10 chunks + meta) of model output and is the single most expensive action in this skill.
> Trigger the check→bootstrap flow ONLY as part of fulfilling a real request to build, render,
> edit, or update a screen/module in Figma. NEVER re-bootstrap just because the runtime SOURCE
> changed in a dev/iteration turn (fixing `assets/src/*`, rebuilding `db-figma-runtime.min.js`):
> a source change + `node build-runtime.cjs` is enough — the on-disk `manifest.json` advances to
> the new sha, and the live file's stale runtime is reconciled LAZILY on the NEXT real render
> (Phase 4a step 1 detects the sha mismatch and re-bootstraps then). Editing the runtime and
> re-bootstrapping are decoupled on purpose.

#### 4a-gate. MODEL CAPABILITY GATE — read before bootstrapping

> **Bootstrapping is a verbatim-copy job, not a coding job.** It means emitting the 10 files
> `assets/bootstrap/store-0.js` … `store-9.js` — each up to 7 000 characters of minified JS —
> **byte-for-byte**, one per `use_figma` call. Nothing may be shortened, merged, split,
> re-indented, re-quoted, summarised or "fixed". A model that cannot hold that much exact text
> will truncate or paraphrase a chunk, then try to compensate with hand-written Figma node code,
> and the result is a damaged file plus a runtime that fails in confusing ways later.
>
> **So: if you cannot reproduce each chunk exactly, do not start.** Change nothing in the file
> and reply with this message (adapt the language to the user):
>
> ```text
> Runtime-Bootstrap erforderlich — bitte auf ein großes Modell wechseln.
>
> Dieses Figma-File hat noch keine (aktuelle) DB-UX-Runtime. Sie muss einmalig in 10 Chunks
> à 7.000 Zeichen zeichengenau übertragen werden (~64 KB). Kleinere Modelle kürzen dabei
> Chunks und hinterlassen eine kaputte Runtime, deshalb breche ich hier ab — ich habe nichts
> verändert.
>
> Bitte in Kiro auf ein großes Modell wechseln (z. B. Claude Opus 5) und den Auftrag erneut
> senden. Der Bootstrap ist pro File nur EINMAL nötig; danach läuft Rendern und Editieren
> wieder mit jedem Modell.
> ```
>
> Two safety nets back this up, so a failed attempt stays harmless — do not try to work around
> them, they are the reason a broken bootstrap cannot silently ship:
>
> - `store-meta.js` verifies every chunk's exact length **and its content checksum**, and
>   **refuses to write the `meta` record** on any mismatch. Without `meta` the stored chunks are
>   inert, so the file is left untouched rather than half-broken. Its error names the bad chunk —
>   re-paste exactly that `store-<i>.js` verbatim (never patch the stored value). The checksum is
>   what catches a SAME-LENGTH edit: a `\uXXXX` escape emitted as the literal character, a
>   straight quote turned typographic, a minified `!0` "corrected" to `!1`. Those pass a length
>   check, so length alone would let a subtly wrong runtime report itself as ready.
> - `check.js` re-verifies the same checksums before reporting `ready`, because the `sha` in the
>   `meta` record is a version label written by `store-meta.js`, never a digest of what is
>   actually stored. A store altered after a bootstrap therefore reports `ready: false` with the
>   offending chunks in `corruptChunks`, instead of rendering from code that is not the built one.
> - `render.js` re-checks the assembled size and stops instead of evaluating a truncated runtime.
>
> This gate applies to the ONE-TIME bootstrap only. Once `check.js` reports `ready: true`,
> rendering and editing cost ~0.5 KB of loader and work with any model.

#### 4a. Store-once (PREFERRED)

> **Which steps need which model.** Step 1 (`check.js`), step 4 and the whole of 4a-recovery are
> plain diagnostics — any model may run them, and running `check.js` on a file you will not
> bootstrap is always safe. ONLY step 2, the verbatim store loop, is gated on a large model.

1. **Check**: paste `assets/bootstrap/check.js`. It reports `{ ready, storedSha, expectedSha, storedBytes, expectedBytes, corruptChunks, gate }` — it compares against the expected sha, the stored byte count AND each chunk's content checksum itself, so no manual manifest comparison is needed. `ready: true` → skip to step 4 (the store is already verified; step 3 belongs to a fresh bootstrap). `ready: false` → the `gate` string states the bootstrap contract; obey 4a-gate above. A non-empty `corruptChunks` means the store was altered, not merely stale: re-paste exactly those `store-<i>.js` files and re-run `store-meta.js`.
2. **Bootstrap if needed** (stale/missing/corrupt): paste each `assets/bootstrap/store-<i>.js` in its own `use_figma` call — verbatim, all 10 — then `assets/bootstrap/store-meta.js` LAST. Each `store-<i>.js` returns `c<i>:<length>`; that length must equal 7 000 (2 801 for the last chunk). If one differs, re-paste that file before continuing. `store-meta.js` then re-checks lengths AND checksums, so a chunk that came out the right length but altered is still caught there.
3. **Verify the store actually parses** — do this once, right after `store-meta.js`, before any plan. `check.js` and `store-meta.js` prove the stored bytes are correct; neither proves the reassembled source is loadable. Paste `assets/bootstrap/render.js` and return the entry points instead of rendering:
    ```js
    return JSON.stringify({
    	renderPlan: typeof renderPlan,
    	applyEdits: typeof applyEdits,
    	apiHelpers: Object.keys(api).length
    });
    ```
    Expect three `"function"`/non-zero values. If this throws, go to 4a-recovery — do NOT start
    rendering and do NOT hand-roll Figma node code.
4. **Render**: paste `assets/bootstrap/render.js`, then append:
    ```js
    const PLAN = { screen, targetNodeId, layout, variables };
    const res = await renderPlan(PLAN);
    return JSON.stringify(res.audit);
    ```

#### 4a-recovery. Corrupted runtime data

If `check.js` returns a runtime record but `render.js` fails while evaluating the stored chunks
(e.g. syntax errors, invalid property names, or a chunk-boundary failure), do NOT patch the
stored chunks and do NOT hand-roll a renderer. The runtime is stored only as shared plugin data
on `figma.root`; clear that data and bootstrap it again from the current workspace assets:

1. Read `assets/bootstrap/manifest.json` and determine `chunkCount`.
2. In one `use_figma` call, clear `dbuxRuntime/meta` and every `dbuxRuntime/c<i>` key for
   `i = 0 .. chunkCount - 1` by setting each value to an empty string:
    ```js
    const chunkCount = 10; // replace with manifest.json's chunkCount
    for (const key of [
    	"meta",
    	...Array.from({ length: chunkCount }, (_, i) => `c${i}`)
    ]) {
    	figma.root.setSharedPluginData("dbuxRuntime", key, "");
    }
    ```
3. Re-run the normal bootstrap: `store-0.js` … `store-(chunkCount-1).js`, each in its own
   `use_figma` call, and `store-meta.js` LAST. Use the files verbatim; never manually merge,
   truncate, or repair chunk contents. **This is a bootstrap, so 4a-gate applies** — if you
   cannot emit the chunks byte-for-byte, stop here and hand over to a large model instead of
   attempting a partial repair.
4. Run `check.js` again and confirm `ready: true` before loading `render.js`. This recovery
   changes only runtime metadata; it does not delete Figma pages or rendered frames.

Only after this clean re-bootstrap fails again should the agent stop and report the exact error.

#### 4b. Single verbatim paste — REMOVED, do not attempt

> `use_figma` caps `code` at 50 000 characters. The minified runtime is now ~50.7 k on its own,
> so it does not fit even WITHOUT a plan — and this path required runtime AND plan in the same
> call, because `globalThis` does not persist between calls. There is exactly ONE render path:
> the store-once bootstrap (4a). `node assets/build-runtime.cjs` prints the current size and warns
> when headroom runs out; do not "optimise" runtime features away to resurrect this path.

#### The render path

- NEVER hand-roll `createInstance`/`appendChild`/`setBoundVariable`.
- **Runtime source**: split into modules under `assets/src/` (`10-figma-helpers` → `70-edit-engine`). Key maps are generated from registries and injected at the `@db-maps-inject` marker in `10-figma-helpers.js`.
- **Editing the runtime**: change the relevant module under `assets/src/`, then regenerate with `pnpm --filter @db-ux/agent-cli run runtime:build`. Never edit `db-figma-runtime.min.js` or `assets/bootstrap/*` by hand.
- **Rebuild is enforced**: `runtime:check` (CI, next to the registry contract check) runs the same pipeline, writes nothing and fails when the committed bundle or a bootstrap snippet differs from `src/`. Without it an unbuilt source edit would pass every unit test — the tests load the BUILT bundle — while the fix never reaches a rendered screen.
- **Batch runtime changes**: a re-bootstrap is EXPENSIVE (~64 KB as 10 chunks + meta) and needs a large model (4a-gate). Collect ALL planned fixes, then ONE build. Do NOT re-bootstrap after each source edit — only when the NEXT real render/edit runs (see the COST RULE above). Never rebuild per micro-fix.
- **Known limitation — the transfer cost scales with an edit's POSITION, not its size.** The store is one blob sliced at fixed 7 000-byte offsets, so a length change shifts every following chunk: an edit in `10-figma-helpers` (3.9 KB) invalidates all 10 chunks, and the injected registry maps all sit in `c0` — so adding one icon forces a full re-transfer. Batching (above) is the mitigation available TODAY. The structural fix is specified in `requirements/incremental-runtime-transfer.md` (stale-chunk reporting, per-module records, policy-as-data); read it only when working on the transfer mechanism itself.

### Phase 5 — Audit, fix, report

1. Read `res.audit`. If `valid === false`, fix the PLAN and re-render (max 3×).
2. Report: page type, blocks/patterns used, components, tokens, icons, gaps, validation result.

## Iterating on an existing screen

> **Intent words always refer to the ALREADY-RENDERED screen.** Words like "change", "adjust",
> "add", "remove", "fix", "recolor", "swap", "rename", "ändern", "ergänzen", "entfernen" →
> `applyEdits`, NEVER `renderPlan`. A full `renderPlan` is ONLY for first-time creation or a
> genuine structural rebuild.
>
> **COST RULE — small visual tweaks are `applyEdits`, not a re-render.** Recoloring, swapping an
> icon, flipping a variant, changing a label, toggling visibility, nudging a gap — all patch in
> place with a tiny edit spec. A `renderPlan` re-render re-sends the ENTIRE plan (the whole node
> tree) through `use_figma` AND regenerates every node id — for a one-badge change that is easily
> 10× the tokens of an `applyEdits`. Re-render a frame ONLY when its STRUCTURE changes; for
> anything cosmetic, edit in place.

For follow-up changes, patch in place with `applyEdits`:

1. Make `applyEdits` available via the store-once loader (`assets/bootstrap/render.js` exposes
   both `renderPlan` AND `applyEdits`). If not bootstrapped, bootstrap first (Phase 4a) — that is
   the only path. There is ONE runtime bundle, no separate edit file.
2. Author a small edit spec:
    ```js
    const res = await applyEdits({
    	screen: "Frame Name", // or rootId: "12:34"
    	targetNodeId: "700:4960",
    	edits: [
    		{ op: "setText", find: "Old", value: "New" },
    		{ op: "setVariant", find: "Title", axis: "As", value: "h3" },
    		{
    			op: "setSectionFill",
    			anchorText: "Section",
    			token: "color.background.elevated"
    		},
    		{ op: "remove", find: "Unused" },
    		{
    			op: "appendLike",
    			find: "Sibling",
    			node: {
    				/* plan node */
    			}
    		}
    	]
    });
    return JSON.stringify(res);
    ```
3. Ops: `setText`, `setVisible`, `hideNavItem`, `setVariant`, `setContainerGap`,
   `setSectionFill`, `setTextFill`, `remove`, `appendLike`, `custom`.
4. Only fall back to `renderPlan` for large structural restructures.

**Micro-edit recipes (prefer these over a re-render):**

- **Swap an icon / set any component prop** (e.g. a stepper's done-badge number → check): there is
  no `applyProps` op, so use `custom` with the exposed `api.applyProps` — it targets one found node:
    ```js
    { op: "custom", name: "Badge", apply: async (n, api) => {
        await api.applyProps(n, { "Icon Small": "check", "Semantic": "Successful" }); } }
    ```
- **Recolor a text/surface**: `setTextFill` / `setSectionFill` (bound tokens only).
- **Change a variant**: `setVariant` (e.g. `{ op:"setVariant", find:"Weiter", axis:"Variant", value:"Ghost" }`).

**Inspecting a component's properties (ONE read, not trial-and-error):** to find the exact property
name/values before editing (e.g. the Badge's icon-swap prop), do a SINGLE read-only `use_figma`
call — import the SET (not the component) and dump its definitions:

```js
const set = await figma.importComponentSetByKeyAsync(
	"<key from components.json figmaSets>"
);
return JSON.stringify(
	Object.entries(set.componentPropertyDefinitions).map(([k, v]) => ({
		key: k,
		type: v.type,
		options: v.variantOptions
	}))
);
```

Use `importComponentSetByKeyAsync` (the figmaSets keys are set keys); `importComponentByKeyAsync`
throws "not found" for them. Or read a live instance's `componentProperties` after loading its page.

### Fallback ladder (when no prepared op fits)

Do NOT jump to raw hand-written node code. Climb this ladder:

1. **Prepared op fits** → use it (`setText`, `setVariant`, …).
2. **No op fits, single target** → `custom` op with `apply(node, api, frame)`:
    ```js
    { op: "custom", find: "Node", apply: async (node, api) => { await api.bindFill(node, "color.background.elevated"); } }
    ```
3. **Free-form / multi-node** → paste loader, use `api` directly, finish with `api.auditTree(frame)`.
4. **Truly raw code** → LAST resort. Still bind fills on paint, reference only registry tokens, finish with `api.auditTree(frame)`.

## Stop conditions (report the exact gap — never approximate)

- A required component / variant / token / text style is missing from the registries (you
  cannot build a compliant block without it — do NOT approximate).
- No page type fits the prompt at all (propose a new catalog, `requiresHumanReview: true`).
- A surface needs a button variant that does not exist.
- A Concept component is needed but `concept_components` is not enabled.
- `{figma_target}` has no `node-id`.
- `res.audit.valid === false` after 3 attempts.

> A merely MISSING block/pattern is NOT a stop condition — author a new guideline-compliant one
> (components/tokens must still resolve in the registries). Stop only when the registries lack a
> REQUIRED building block.

## Red Flags (STOP immediately)

- "I'll create the button/card from frames + text." → STOP. Only official DB instances via the runtime.
- "There's a Grid/Container component already in this file, I'll use that one." → STOP. Layout primitives come from the Core Lab LIBRARY by key. Never instantiate a local component, and never reintroduce a page scan / node-id hint to find one.
- "I'll recolor fills to fake a variant." → STOP. Use the built-in variant or adaptive mode.
- "I'll hand-write the node tree, it's faster." → STOP. Author the PLAN JSON and call `renderPlan`.
- "The chunk is long, I'll paste a shortened/merged/summarised version — or just write the `meta` record myself." → STOP. That produces a corrupt runtime. Paste `store-<i>.js` verbatim or hand the bootstrap to a large model (4a-gate).
- "The runtime won't load, I'll patch the stored chunks / build the frame manually this once." → STOP. Clear the data and re-bootstrap (4a-recovery), under 4a-gate.
- "I'll recolor fills / fake spacing to force a fit." → STOP. Prefer an existing block; if none fits, author a new guideline-compliant one (registry-resolved components/tokens, `_meta.spacingModel`), don't approximate.
- "I'll invent components or spacing values." → STOP. Structure/spacing come from the guidelines, but every component/token MUST resolve in `components.json` / `tokens.json`. Authoring a new BLOCK from resolved parts is fine; inventing components/tokens is not.
- "All my sections are the same grid." → STOP. Heterogeneous content needs different patterns.
- "Every card gets a brand button." → STOP. ≤1 brand/page; equal items share one action kind.
- "I'll make the card a link AND add a button inside." → STOP. Clickable card = exactly one interactive element.
- "I'll add a 'Startseite'/'Home' nav item." → STOP. Logo = home. List only OTHER pages.
- "I'll use raw text / figma.createText()." → STOP. ALL text via Heading/Body components. No raw text nodes.
- "To change one label, I'll regenerate the whole screen." → STOP. Use `applyEdits` — never re-render for small changes.
- "I'll wire the frames into a clickable prototype (setReactionsAsync / flow / on-click navigate)." → STOP. Prototyping is OUT OF SCOPE for now — deliver static frames only and say so.

## Output Checklist

- [ ] `{figma_target}` had a node-id
- [ ] Page type detected → catalog loaded
- [ ] Content groups mapped to sections (recorded with reasons)
- [ ] Plan validated per Phase 3 (registry resolution, composition, visual rules)
- [ ] Rendered via `renderPlan` — no hand-written node code
- [ ] `res.audit.valid === true`
- [ ] Report produced
