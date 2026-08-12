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
    - "erstelle eine Landingpage"
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
    - asset: assets/registries/dashboard/sections.json
    - asset: assets/registries/dashboard/template.json
    - asset: assets/registries/dashboard/blocks.json
    - asset: assets/registries/dashboard/block-patterns.json
    - asset: assets/registries/dashboard/examples.json
    - asset: assets/registries/contentpage/sections.json
    - asset: assets/registries/contentpage/template.json
    - asset: assets/registries/contentpage/blocks.json
    - asset: assets/registries/contentpage/block-patterns.json
    - asset: assets/registries/contentpage/examples.json
    - asset: assets/registries/form/sections.json
    - asset: assets/registries/form/template.json
    - asset: assets/registries/form/blocks.json
    - asset: assets/registries/form/block-patterns.json
    - asset: assets/registries/form/examples.json
    - asset: assets/registries/process/sections.json
    - asset: assets/registries/process/template.json
    - asset: assets/registries/process/blocks.json
    - asset: assets/registries/process/block-patterns.json
    - asset: assets/registries/process/examples.json
    - asset: assets/registries/modal/sections.json
    - asset: assets/registries/modal/template.json
    - asset: assets/registries/modal/blocks.json
    - asset: assets/registries/modal/block-patterns.json
    - asset: assets/registries/modal/examples.json

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

> **OUTPUT IS ALWAYS A FIGMA FRAME — NEVER HTML, CSS, JSX or any workspace file.**
> The only permitted output is a rendered frame in the Figma file via `use_figma` + `renderPlan`.
> The agent NEVER writes imperative Figma node code — every screen goes through `renderPlan`.

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

## Workflow

### Phase 1 — Resolve target & scope

1. Extract `fileKey` and `node-id` from `{figma_target}`. No `node-id` → STOP, ask.
2. If a Concept component is needed and `{concept_components}` is not enabled → ask once.
3. **MODULE vs SCREEN — decide the output shape from the wording.**
    - The user asks for a **"module" / "modules" / "block" / "blocks" / "component"** → render each
      one as its OWN standalone frame with `module: true` (NO Header/shell, no page-zebra check,
      default width = 1024 content column; override `width` per block so it sizes like the block,
      e.g. a stat card ~360, a list panel ~680, a chart panel ~460). ONE `renderPlan` per module →
      SEPARATE frames (a second/third module is a differently-named screen, so the runtime places
      it to the right automatically). A module frame is JUST the block — never wrap it in a Header
      or a full page, otherwise it is just another Example.
    - The user asks for a **"screen" / "page" / "example" / "dashboard" / "landing page" / a named
      view** → render ONE full frame WITH the Header shell (the normal page path, `module` unset).
    - When in doubt (e.g. "build me the KPI cards") default to modules (separate header-less frames);
      a single assembled example is only right when the user asks to see the blocks composed together.
    - **A `modal/` (dialog) uses OVERLAY mode** — set `overlay: true` (NOT `module`) with `width`
      1440, `height` 1024, and `cardWidth` sized to the dialog kind (~400 confirmation/acknowledge,
      ~520 standard, ~640 form dialog), regardless of whether the prompt says "dialog", "modal",
      "screen" or "example". The runtime renders a screen-filling `Backdrop` (Beta) with the dialog
      `Card` (elevation 1) centered on top; `plan.layout` is just the Card. NO Header shell. The
      dimmed backdrop is rendered; its open/close interaction is out of scope (static frame only).
      See `registries/modal/template.json` → `delivery`.

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
2.  **Load that page type's catalog** under `registries/<pageType>/`: `sections.json` (content→section
    intent table via `whenToUse`), `template.json` (required/optional/forbidden + order + rules),
    `block-patterns.json` (section-level patterns), `blocks.json` (atomic blocks), `examples.json`
    (density/style reference only — NOT a skeleton to copy). ALSO load the consolidated
    human-readable design principles for that type from
    `context/general/layout-type-guidelines/<pageType>.md` when it exists (e.g. `dashboard.md` —
    bento model, data-first, alerts inline, floating-label action rows, spacing/color). It is the
    SOURCE OF TRUTH for the design intent; the registry `_meta`/patterns are the same rules made
    machine-consumable.
3.  **Split the prompt into content groups** (the distinct things to show); each group → one section.
4.  **Map each group to a section** via `sections.json` → `whenToUse` (record id + one-line reason).
    Prefer an existing section. If none fits, you MAY author a new guideline-compliant section/
    block rather than force-fit (see step 6 + "Authoring a new block" below) — record why.
5.  **Order the sections** per `template.json` (positions + rules: zebra, contentWidth, action
    hierarchy, "no mono-layout for heterogeneous content").
6.  **Fill each section** from its `pattern`/`itemBlock`: copy the fragment, expand `$ref`, fill
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
   `blocks.json` / `block-patterns.json`; a newly authored block is fine as long as its
   components/tokens resolve here.
2. **Composition rules**: page type detected; each content group mapped to a section (existing
   or newly authored, id + reason recorded); sections ordered per `template.json` (required
   present, forbidden absent); no mono-layout for heterogeneous content; any new block/pattern
   follows the page type's `_meta.spacingModel` and is marked `origin: "guideline-authored"`
   (no free approximation — structure/spacing from the guidelines, components/tokens from the
   registries); `examples.json` used only as a density/style reference.
3. **Visual rules** — per `screen-guidelines.md`: action hierarchy (≤1 brand button/page; equal
   items share one kind; clickable card has ≤1 interactive element); typography ALL via
   Heading/Body (no raw text), weight/color agree, heading hierarchy h2 → h3/h4/h5; every
   Section has a title; Header first; first section is canvas level-1 with alternating zebra;
   images use a ratio; icons use the `Icon` component.
4. **Runtime audit**: after rendering, `renderPlan(...).audit.valid === true`.
5. (Optional) cross-check live via `db-ux/list_components`, `get_component_props`, `list_icons`.

### Phase 4 — Render via the runtime

Two paths. **Prefer store-once** (keeps render calls tiny).

> **COST RULE — bootstrap ONLY when a render/edit is actively requested.** A re-bootstrap emits
> ~42 KB (6 chunks + meta) of model output and is the single most expensive action in this skill.
> Trigger the check→bootstrap flow ONLY as part of fulfilling a real request to build, render,
> edit, or update a screen/module in Figma. NEVER re-bootstrap just because the runtime SOURCE
> changed in a dev/iteration turn (fixing `assets/src/*`, rebuilding `db-figma-runtime.min.js`):
> a source change + `node build-runtime.cjs` is enough — the on-disk `manifest.json` advances to
> the new sha, and the live file's stale runtime is reconciled LAZILY on the NEXT real render
> (Phase 4a step 1 detects the sha mismatch and re-bootstraps then). Editing the runtime and
> re-bootstrapping are decoupled on purpose.

#### 4a. Store-once (PREFERRED)

1. **Check**: paste `assets/bootstrap/check.js`, compare returned `sha` to `assets/bootstrap/manifest.json`.
2. **Bootstrap if needed** (stale/missing): paste each `assets/bootstrap/store-<i>.js` in its own `use_figma` call, then `assets/bootstrap/store-meta.js` LAST.
3. **Render**: paste `assets/bootstrap/render.js`, then append:
    ```js
    const PLAN = { screen, targetNodeId, layout, variables };
    const res = await renderPlan(PLAN);
    return JSON.stringify(res.audit);
    ```

#### 4b. Single verbatim paste (FALLBACK)

Paste entire `assets/db-figma-runtime.min.js` verbatim in ONE `use_figma` call (runtime + plan together — `globalThis` does NOT persist between calls). Then:

```js
const PLAN = { screen, targetNodeId, layout, variables };
const res = await renderPlan(PLAN);
return JSON.stringify(res.audit);
```

#### Both paths

- NEVER hand-roll `createInstance`/`appendChild`/`setBoundVariable`.
- **Runtime source**: split into modules under `assets/src/` (`10-figma-helpers` → `70-edit-engine`). Key maps are generated from registries and injected at the `@db-maps-inject` marker in `10-figma-helpers.js`.
- **Editing the runtime**: change the relevant module under `assets/src/`, then regenerate with `node assets/build-runtime.cjs`. Never edit `db-figma-runtime.min.js` or `assets/bootstrap/*` by hand.
- **Batch runtime changes**: a re-bootstrap is EXPENSIVE (~42 KB as 6 chunks + meta). Collect ALL planned fixes, then ONE build. Do NOT re-bootstrap after each source edit — only when the NEXT real render/edit runs (see the COST RULE above). Never rebuild per micro-fix.

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
   both `renderPlan` AND `applyEdits`). If not bootstrapped: bootstrap first (Phase 4a), or
   paste `assets/db-figma-runtime.min.js` as fallback. There is ONE runtime bundle — no
   separate edit file.
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
- "I'll recolor fills to fake a variant." → STOP. Use the built-in variant or adaptive mode.
- "I'll hand-write the node tree, it's faster." → STOP. Author the PLAN JSON and call `renderPlan`.
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
