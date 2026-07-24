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
    - asset: assets/db-figma-runtime.min.js
    - asset: assets/build-runtime.cjs
    # Runtime source is split into modules under assets/src/ (concatenated by the build).
    - asset: assets/registry-maps.cjs
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
    - asset: assets/registries/dashboard/example.json
    - asset: assets/registries/landingpage/sections.json
    - asset: assets/registries/landingpage/template.json
    - asset: assets/registries/landingpage/blocks.json
    - asset: assets/registries/landingpage/block-patterns.json
    - asset: assets/registries/landingpage/examples.json

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

Turns a prompt into a DB UX-compliant Figma screen. The agent authors a declarative
**Composition Plan (JSON)** and hands it to the hardened **render runtime** (authored as
modules under `assets/src/`, concatenated + minified into `assets/db-figma-runtime.min.js`).

## Pre-Conditions

1. `context/design-system/screen-guidelines.md` is loaded (binding design rules).
2. A Figma design file with **write** access is connected via the Figma MCP (`use_figma`).
3. `{figma_target}` is a Figma URL with a `node-id`. If not → STOP and ask.
4. The `db-ux` MCP server is connected (live component/token/icon verification).

## Workflow

### Phase 1 — Resolve target & scope

1. Extract `fileKey` and `node-id` from `{figma_target}`. No `node-id` → STOP, ask.
2. If a Concept component is needed and `{concept_components}` is not enabled → ask once.

### Phase 2 — Compose the Plan

Follow the **Composition workflow** in `context/design-system/screen-guidelines.md` → Part A:

1. Detect page type.
2. Load that page type's catalog (`registries/<pageType>/`).
3. Split prompt into content groups, map each to a section via `sections.json` → `whenToUse`.
4. Order per `template.json`, fill from `blocks.json` / `block-patterns.json`.
5. Assemble one Composition Plan (PLAN SCHEMA in `assets/src/70-edit-engine.js`): Header first, then sections.
6. Reference ONLY registered names from `components.json`, `tokens.json`, and the page type catalogs.

### Phase 3 — Validate the Plan

Run the **Validation / Linting** checklist in `context/design-system/screen-guidelines.md`:

1. Registry resolution (components, tokens, blocks).
2. Composition rules (content-driven sections, ordering, no mono-layout).
3. Visual rules (action hierarchy, typography via Heading/Body only, section structure, color/density).
4. (Optional) Cross-check live via `db-ux/list_components`, `get_component_props`, `list_icons`.

### Phase 4 — Render via the runtime

Two paths. **Prefer store-once** (keeps render calls tiny).

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
- **Batch runtime changes**: a re-bootstrap is EXPENSIVE (~37 KB as 6 chunks). Collect ALL planned fixes, then ONE build + ONE re-bootstrap. Never rebuild per micro-fix.

### Phase 5 — Audit, fix, report

1. Read `res.audit`. If `valid === false`, fix the PLAN and re-render (max 3×).
2. Report: page type, blocks/patterns used, components, tokens, icons, gaps, validation result.

## Iterating on an existing screen

> **Intent words always refer to the ALREADY-RENDERED screen.** Words like "change", "adjust",
> "add", "remove", "fix", "ändern", "ergänzen", "entfernen" → `applyEdits`, NEVER `renderPlan`.
> A full `renderPlan` is ONLY for first-time creation or genuine structural rebuild.

For follow-up changes, patch in place with `applyEdits`:

1. Make `applyEdits` available via the store-once loader (`assets/bootstrap/render.js` exposes
   both `renderPlan` AND `applyEdits`). If not bootstrapped: bootstrap first (Phase 4a), or
   paste `assets/db-figma-runtime.min.js` as fallback. There is ONE runtime bundle — no
   separate edit file.
2. Author a small edit spec:
    ```js
    const res = await applyEdits({
        screen: "Frame Name",   // or rootId: "12:34"
        targetNodeId: "700:4960",
        edits: [
            { op: "setText", find: "Old", value: "New" },
            { op: "setVariant", find: "Title", axis: "As", value: "h3" },
            { op: "setSectionFill", anchorText: "Section", token: "color.background.elevated" },
            { op: "remove", find: "Unused" },
            { op: "appendLike", find: "Sibling", node: { /* plan node */ } }
        ]
    });
    return JSON.stringify(res);
    ```
3. Ops: `setText`, `setVisible`, `hideNavItem`, `setVariant`, `setContainerGap`,
   `setSectionFill`, `setTextFill`, `remove`, `appendLike`, `custom`.
4. Only fall back to `renderPlan` for large structural restructures.

### Fallback ladder (when no prepared op fits)

Do NOT jump to raw hand-written node code. Climb this ladder:

1. **Prepared op fits** → use it (`setText`, `setVariant`, …).
2. **No op fits, single target** → `custom` op with `apply(node, api, frame)`:
    ```js
    { op: "custom", find: "Node", apply: async (node, api) => { await api.bindFill(node, "color.background.elevated"); } }
    ```
3. **Free-form / multi-node** → paste loader, use `api` directly, finish with `api.auditTree(frame)`.
4. **Truly raw code** → LAST resort. Still bind fills on paint, reference only registry tokens, finish with `api.auditTree(frame)`.

## Red Flags (STOP immediately)

| If you think…                                                     | Response                                                         |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| "I'll create the button/card from frames + text."                 | STOP. Only official DB instances via the runtime.                |
| "I'll recolor fills to fake a variant."                           | STOP. Use built-in variant or adaptive mode.                     |
| "I'll hand-write the node tree, it's faster."                     | STOP. Author the PLAN JSON and call `renderPlan`.                |
| "I'll freely combine block properties."                           | STOP. Use captured blocks from `blocks.json`.                    |
| "I'll invent a new section/page layout."                          | STOP. Select via `sections.json`; unmatched → human review.      |
| "All my sections are the same grid."                              | STOP. Heterogeneous content needs different patterns.            |
| "Every card gets a brand button."                                 | STOP. ≤1 brand/page; equal items share one action kind.          |
| "I'll make the card a link AND add a button inside."              | STOP. Clickable card = exactly one interactive element.          |
| "I'll add a 'Startseite'/'Home' nav item."                        | STOP. Logo = home. List only OTHER pages.                        |
| "I'll use raw text / figma.createText()."                         | STOP. ALL text via Heading/Body components. No raw text nodes.   |
| "To change one label, I'll regenerate the whole screen."          | STOP. Use `applyEdits` — never re-render for small changes.     |

## Output Checklist

- [ ] `{figma_target}` had a node-id
- [ ] Page type detected → catalog loaded
- [ ] Content groups mapped to sections (recorded with reasons)
- [ ] Plan validated per `screen-guidelines.md` → Validation
- [ ] Rendered via `renderPlan` — no hand-written node code
- [ ] `res.audit.valid === true`
- [ ] Report produced
