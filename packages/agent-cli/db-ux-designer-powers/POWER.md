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

## Context Files

The `context/` folder provides design knowledge at two levels:

### General (universal UI principles)

| File | Content |
|------|---------|
| `context/general/design-laws.md` | Gestalt laws (proximity, similarity, closure, common region) |
| `context/general/layout-guidelines.md` | Content types, grouping, spacing hierarchy, layout primitives |

### Design System (DB UX v3 specific)

| File | Content |
|------|---------|
| `context/design-system/screen-guidelines.md` | Screen composition, visual rules, action hierarchy, validation |
| `context/design-system/component-guidelines/` | Do/Don't per component (button, card, section, header, …) |

## Registries (machine-readable)

Live under `skills/generate-figma-screen/assets/registries/`:

- **`tokens.json`** — colors, spacing, radius, text styles (bound to Figma Variables/Styles).
- **`components.json`** — official DB components with variant axes/values.
- **`icons.json`** — icon name → DB Theme Icons component key.
- **Per page type** (`dashboard/`, `landingpage/`):
    - `sections.json` — content→section selection table.
    - `template.json` — section order + required/optional/forbidden.
    - `blocks.json` — atomic block fragments.
    - `block-patterns.json` — section-level patterns (landingpage).
    - `example.json` / `examples.json` — density/style reference (not a skeleton).

## Runtime Architecture

The render runtime lives under `skills/generate-figma-screen/assets/`:

- **Source**: split into modules under `src/` (`10-figma-helpers` → `70-edit-engine`).
- **Build**: `node build-runtime.cjs` concatenates + minifies into `db-figma-runtime.min.js` and regenerates bootstrap snippets.
- **Registry maps**: `registry-maps.cjs` generates key maps from `registries/*.json` and injects them at build time.
- **Single bundle**: ONE file (`db-figma-runtime.min.js`) provides both `renderPlan` and `applyEdits`.

## MCP Servers

| Server | Purpose |
|--------|---------|
| `db-ux` (`@db-ux/mcp-server`) | Live component, token, icon verification |
| `figma` (Figma Dev Mode MCP, local) | Renders Composition Plan into Figma (`use_figma`) + inspection |

> The `figma` server requires the Figma desktop app with Dev Mode MCP enabled.
> The bundled `mcp.json` points at `http://127.0.0.1:3845/mcp`.

## Hard Rules (always active)

1. **No imperative Figma code.** Every screen goes through `renderPlan` — never `createFrame`/`createInstance`/`appendChild` directly.
2. **No workspace output.** Output is a Figma frame, never HTML/CSS/JSX files.
3. **No raw text nodes.** ALL text via Heading/Body components — never `figma.createText()`.
4. **Batch runtime changes.** A re-bootstrap is expensive (~37 KB). Collect all fixes, then ONE build + ONE re-bootstrap.

## Agent Rules Generation

To generate agent-specific rules files (e.g. for Copilot, Amazon Q):

```shell
npx @db-ux/agent-cli
```
