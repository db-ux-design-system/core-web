---
name: "db-ux-designer"
description: "AI integration for designing DB UX Design System v3-compliant screens in Figma. Provides a skill to generate screens from a prompt using only official components, bound variables, and registered text styles."
keywords:
    - db-ux
    - design system
    - deutsche bahn
    - figma
    - designer
    - screen
    - generate
    - v3
---

# DB UX Designer Powers

Equips AI agents to produce DB UX Design System v3-compliant Figma screens.

## Skills

- **generate-figma-screen** — Generates Figma screens from a prompt via a validated Composition Plan and a hardened render runtime. See `skills/generate-figma-screen/SKILL.md`.

## Page-type registries

A page-type catalog is exactly **three** files: `blocks.json` (atomic fragments), `patterns.json` (complete modules, each carrying its own `intent` / `whenToUse` / `level` / `cardinality` / `alternatives`) and `template.json` (the page grammar: `order`, `slots`, `rules`). Selection metadata lives on the pattern, so a pattern cannot be unreachable from a separate index; reachability runs `template.slots[*].allow → patterns → $ref → blocks`.

The shape is enforced, not documented: run

```bash
pnpm --dir packages/agent-cli run registry:validate
```

It checks every page type against the schema — required `_meta`, field whitelists, `order`/`slots` consistency, resolvable `$ref`s, no cycles, no unreachable fragments — and against the global registries: every `type` in `components.json`, every `props` combination against a non-deprecated `figmaSet`'s variant axes, every token in `tokens.json`, every icon in `icons.json`, `gridLayout` against the nine live Grid layouts with its slot count, and the narrow `ChartBar` / `ProgressBar` / `Pagination` / `Image` contracts.

Exit code 1 means a registry violates the contract. It runs in CI (`01-validate.yml`); do not treat it as optional.

## Context Files

The `context/` folder provides design knowledge at two levels:

### General (universal UI principles)

| File                                      | Content                                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `context/general/design-laws.md`          | Gestalt laws (proximity, similarity, closure, common region)                                            |
| `context/general/layout-guidelines.md`    | Content types, grouping, spacing hierarchy, layout primitives                                           |
| `context/general/layout-type-guidelines/` | Consolidated design principles PER layout type (e.g. `dashboard.md`); loaded for the detected page type |

### Design System (DB UX v3 specific)

| File                                              | Content                                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------- |
| `context/design-system/screen-guidelines.md`      | Screen composition, visual rules, action hierarchy, validation              |
| `context/design-system/component-construction.md` | How a compliant component is BUILT: anatomy, sizes, content height, nesting |
| `context/design-system/component-guidelines/`     | Do/Don't per component (button, card, section, header, …)                   |

## Registries (machine-readable)

Live under `skills/generate-figma-screen/assets/registries/`:

- **`tokens.json`** — colors, spacing, radius, text styles (bound to Figma Variables/Styles).
- **`components.json`** — official DB components with variant axes/values.
- **`icons.json`** — icon name → DB Theme Icons component key.
- **Per page type** (`dashboard/`, `contentpage/`, `form/`, `process/`, `modal/`):
    - `sections.json` — content→section selection table.
    - `template.json` — section order + required/optional/forbidden.
    - `blocks.json` — atomic block fragments.
    - `block-patterns.json` — section-level patterns.
    - `examples.json` — density/style reference (not a skeleton).

## Runtime Architecture

The render runtime lives under `skills/generate-figma-screen/assets/`:

- **Source**: split into modules under `src/` (`10-figma-helpers` → `70-edit-engine`).
- **Build**: `node build-runtime.cjs` concatenates + minifies into `db-figma-runtime.min.js` and regenerates bootstrap snippets.
- **Registry maps**: `build-registry-maps.cjs` generates key maps from `registries/*.json` and injects them at build time.

### Generated vs. hand-maintained — what a KB regeneration overwrites

`build-from-kb.cjs` derives Power artifacts from the Knowledge Database
(`packages/agent-cli/knowledge-database/`, the single source of truth). It writes exactly these, and
**editing them by hand is pointless — the next run overwrites the edit**:

| Path                                              | Generated from                      |
| ------------------------------------------------- | ----------------------------------- |
| `context/design-system/component-guidelines/*.md` | KB `components/*/guidelines.md`     |
| `registries/tokens.json`                          | KB `foundations/*/tokens.json`      |
| `registries/icons.json`                           | KB `icons/` (names; keys curated)   |
| `registries/components.json`                      | KB `figma.json` + `properties.json` |

`components.json` is regenerated in FULL. It keeps a few hand-curated fields — `labelNodePath`,
`note`, `forbiddenFallback`, deprecated sets, hand-written axes and `conceptComponents` — but that
is an explicit ALLOWLIST: anything outside it is dropped silently, with no error. So skill-owned
data must not live there. Render-time capability limits (e.g. how many entries the Navigation can
show) belong in the hand-maintained **`registries/component-constraints.json`**, which no generator
writes; unit tests assert both that the limit is there and that it is NOT in `components.json`.

Everything else under `context/` and `registries/` is hand-maintained and not touched by the
generator today: the page-type catalogs, `layout-guidelines.md`, `layout-type-guidelines/*`,
`design-laws.md` and `screen-guidelines.md`.

- **Single bundle**: ONE file (`db-figma-runtime.min.js`) provides both `renderPlan` and `applyEdits`.
- **Static plan validation**: `src/45-plan-validation.js` is pure (no `figma`) and checks a
  Composition Plan against the registries. `renderPlan` runs it first, and
  `pnpm --filter @db-ux/agent-cli run plan:lint <plan-file>` runs the SAME function in Node — so
  an unknown node type, a `text` string instead of a field map, an unregistered token/icon or an
  over-long navigation is reported BEFORE any model output is spent on a render call. Rules that
  need the rendered tree stay in the audit.
- **Open requirement — incremental transfer.** Because the store is one blob sliced at fixed
  offsets, the re-bootstrap cost scales with an edit's POSITION rather than its size (a change in
  `10-figma-helpers`, or to the registry maps in chunk `c0`, invalidates all 5 chunks). Specified
  in `skills/generate-figma-screen/requirements/incremental-runtime-transfer.md`.
- **Bootstrap needs a large model.** The runtime is stored once per Figma file as 5 verbatim
  chunks (~81 KB). The chunk SIZE is derived — the build picks the fewest chunks that stay inside a
  safe per-message budget and spreads the runtime evenly, so exact lengths live in
  `bootstrap/manifest.json`. Neither the 50 000-char `use_figma` cap nor Figma's 100 kB per-entry
  limit binds at that size; the constraint is that one chunk must be reproduced verbatim in ONE
  message. Reproducing them byte-for-byte is the one step a smaller model cannot do
  reliably — so `bootstrap/check.js` returns a `gate` telling the agent to stop and ask the user
  to switch to a large model (e.g. Claude Opus 5), and `bootstrap/store-meta.js` refuses to mark
  a runtime "ready" unless every chunk matches its length AND its content checksum. `check.js`
  re-verifies those checksums on every render, so a store that was altered after a bootstrap is
  reported instead of trusted — the `sha` is a label, not a digest. Rendering and editing
  afterwards work with any model.

## MCP Servers

| Server                        | Purpose                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `db-ux` (`@db-ux/mcp-server`) | Live component, token, icon verification                       |
| `figma` (Figma remote MCP)    | Renders Composition Plan into Figma (`use_figma`) + inspection |

> The bundled `mcp.json` points at Figma's remote MCP, `https://mcp.figma.com/mcp` (HTTP;
> authenticate via Figma's OAuth flow on first use). No Figma desktop app and no local MCP
> server are involved — do not configure or call a local/desktop endpoint.

## Hard Rules (always active)

1. **No imperative Figma code.** Every screen goes through `renderPlan` — never `createFrame`/`createInstance`/`appendChild` directly.
2. **No workspace output.** Output is a Figma frame, never HTML/CSS/JSX files.
3. **No raw text nodes.** ALL text via Heading/Body components — never `figma.createText()`.
4. **Batch runtime changes.** A re-bootstrap is expensive (~74 KB as 5 chunks + meta). Collect all fixes, then ONE build + ONE re-bootstrap.
5. **Never improvise a bootstrap.** If a chunk cannot be emitted verbatim, STOP and ask the user
   to switch to a large model. Never shorten/merge/repair chunks, never write the `meta` record by
   hand, never substitute hand-written Figma node code.

## Agent Rules Generation

To generate agent-specific rules files (e.g. for Copilot, Amazon Q):

```shell
npx @db-ux/agent-cli
```
