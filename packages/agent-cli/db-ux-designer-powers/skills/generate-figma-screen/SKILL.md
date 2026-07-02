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
      description: "Allow Concept components (Core Lab, not in code). Default false. If a needed component only exists in Core Lab, ask once before using."

requires:
    - context: context/figma-generation.md
      autoLoad: true
    - asset: assets/db-figma-runtime.js
    - asset: assets/registries/db-component-registry.json
    - asset: assets/registries/db-variable-registry.json
    - asset: assets/registries/db-text-style-registry.json
    - asset: assets/registries/db-library-registry.json
    - asset: assets/examples/dashboard.plan.json
    - asset: assets/examples/landingpage.plan.json

tools:
    # Facts / verification from the DB UX MCP (never generate keys from memory):
    - db-ux/list_components
    - db-ux/get_component_props
    - db-ux/get_component_details
    - db-ux/list_icons
    - db-ux/list_design_token_categories
    - db-ux/get_design_tokens
    - db-ux/docs_search
    # Rendering happens through the HOST Figma design MCP write tool (e.g. `use_figma`).
    # See context/figma-generation.md → "Render environment".

outputs:
    - "A DB UX-compliant Figma screen (frame) placed at {figma_target}"
    - "An audit report: { valid, violations }"

on_error:
    max_retries: 3
    actions:
        - log: "Fix the Composition Plan (not the rendered tree) and re-run renderPlan. Never patch nodes one by one."
        - fallback: "If a required component/variant/token/style is missing from the registries, STOP and report the exact gap. Never approximate or recolor."
---

# Generate Figma Screen (DB UX)

> **MANDATORY:** If you are about to write ANY Figma node code (createInstance, appendChild,
> setBoundVariable, createFrame, etc.) WITHOUT having first authored a Composition Plan JSON
> and pasted the render runtime (`assets/db-figma-runtime.js`) verbatim → STOP immediately.
> Read this skill from the top. There is NO shortcut. Every screen goes through `renderPlan`.

Turns a prompt into a DB UX-compliant Figma screen. The agent authors a declarative
**Composition Plan (JSON)** and hands it to the hardened **render runtime**
(`assets/db-figma-runtime.js`). The agent never hand-writes imperative Figma node code —
that is what makes the result model-independent.

## Pre-Conditions

1. `context/figma-generation.md` is loaded (the binding design rules).
2. A Figma design file with **write** access is connected via the host Figma MCP
   (the render tool, e.g. `use_figma`).
3. `{figma_target}` is a Figma URL with a `node-id`. If not → STOP and ask.
4. The `db-ux` MCP server is connected (for live component/token/icon verification).

## Workflow

### Phase 1 — Resolve the target & scope
1. Extract the `fileKey` and `node-id` from `{figma_target}`. If no `node-id` → STOP, ask.
2. If the screen needs a component that only exists in Core Lab (Concept) and
   `{concept_components}` is not enabled → ask once, then wait.

### Phase 2 — Compose the Plan (JSON only)
1. Build a Composition Plan following the PLAN SCHEMA at the bottom of
   `assets/db-figma-runtime.js`. Every screen:
   - starts with a `Header` (DB logo + app name) as the first child;
   - uses titled content Sections (`title` + optional `description`) — never a bare grid;
   - starts on `color.background.canvas` (level-1), then alternates the zebra;
   - groups content with nested containers and DIFFERENT gaps (Gestalt), not uniform spacing.
2. Reference ONLY registered names: components + props (from the component registry),
   color/spacing tokens (variable registry), text styles (text-style registry).
3. See `assets/examples/dashboard.plan.json` and `assets/examples/landingpage.plan.json`
   for complete, registry-valid reference plans (a KPI/overview dashboard and a landing
   page). Use them as structural templates — copy the shape, then swap in your content.

### Phase 3 — Validate the Plan
1. Resolve every component + variant, every token, and every text style against the
   bundled registries. If anything is missing → STOP and report the exact gap.
2. (Optional, recommended) cross-check names live via `db-ux/list_components`,
   `get_component_props`, `list_icons`, `get_design_tokens`.

### Phase 4 — Render via the runtime (single call)
1. In ONE render call to the host Figma write tool:
   - paste the entire contents of `assets/db-figma-runtime.js` verbatim;
   - define `const PLAN = { screen, targetNodeId, layout, variables }`;
   - `const res = await renderPlan(PLAN);`
   - `return JSON.stringify(res.audit);`
2. Do NOT hand-roll `createInstance` / `appendChild` / `setBoundVariable`. The runtime
   already handles every Figma API gotcha (see the red-flags table).

### Phase 5 — Audit, fix, report
1. Read `res.audit`. If `valid === false`, fix the PLAN and re-render (max 3×).
2. Report: used components (+ source library + maturity), bound variables, used icons
   (functional vs illustrative), unresolved gaps, final validation result.

## Output Checklist

- [ ] `{figma_target}` had a node-id (else stopped and asked)
- [ ] Plan validated against the registries — every component/variant/token/style resolves
- [ ] Rendered via `renderPlan` (runtime pasted verbatim) — no hand-written node code
- [ ] `res.audit.valid === true`
- [ ] Header is the first child; first section is level-1; zebra alternates
- [ ] Every content Section has a title; content is grouped (non-uniform gaps)
- [ ] Report produced (components, variables, icons, gaps, validation)

## Red Flags & Anti-Rationalizations

| Thought | Response |
| --- | --- |
| "I'll just create the button/card with a frame + text." | STOP. Only official DB instances via the runtime. |
| "I'll recolor this instance's fills to fake a variant." | STOP. Use the built-in Semantic variant or an adaptive mode. |
| "I'll set `node.setBoundVariable('fills', v)`." | STOP. The runtime binds on the paint (`setBoundVariableForPaint`). |
| "I'll cache this slot and append after setProperties." | STOP. The runtime re-fetches slots after every mutation. |
| "I'll `resize()` the root after setting AUTO height." | STOP. That resets to FIXED → height collapses. Runtime orders it correctly. |
| "I'll make the cards FILL for equal height." | STOP. Cards HUG their content; the runtime prevents overflow. |
| "This token/style probably exists." | STOP. If it's not in the registry, the runtime throws `[STOP]`. Report the gap. |
| "A bare grid section is fine." | STOP. Every content Section needs a `title`. |
| "I'll hand-write the node tree, it's faster." | STOP. Author the PLAN JSON and call `renderPlan`. |
