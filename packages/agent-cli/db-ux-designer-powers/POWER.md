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

This bundle equips AI agents to assist designers producing DB UX Design System v3-compliant screens in Figma.

## Skills

- **generate-figma-screen** — Generates DB UX v3-compliant Figma screens from a prompt, using only official components, bound variables, and registered text styles, via a validated Composition Plan and a hardened render runtime.

## Content System (guided AI composition)

Designers author the reference screens and block catalogs in Figma; the AI follows the captured
catalog per page type so output stays guided, validatable and repeatable. All registries live
under `assets/registries/`:

- **`tokens.json`** — colors, spacing, radius and text styles, each bound to a Figma Variable/Style.
- **`components.json`** — official DB components with their variant axes/values.
- **Per page type** — one folder each (`dashboard/`, `landingpage/`):
    - **`example.json`** — the canonical reference screen (the structural skeleton).
    - **`blocks.json`** — the palette of atomic, registry-valid block fragments (with `source` Figma node ids).
    - **`block-patterns.json`** (landingpage) — section-level patterns (hero, feature-grid, media-text, cta).
- **Action Hierarchy + fallback (human-review) + linting** — `context/figma-generation.md` (Part A — Composition + Validation / Linting).

## MCP Servers

| Server  | Source                     | Purpose                                                            |
| ------- | -------------------------- | ------------------------------------------------------------------ |
| `db-ux` | `@db-ux/mcp-server` (npx)  | Live component, token, and icon verification (docs)                |
| `figma` | Figma Dev Mode MCP (local) | Renders the Composition Plan into Figma (`use_figma`) + inspection |

> **Note — Figma render MCP:** The `generate-figma-screen` skill RENDERS into Figma via the
> `figma` server's write tool (`use_figma`). This is the **official Figma MCP** (Dev Mode),
> not the read-only `figma-developer-mcp`. It requires the **Figma desktop app running with
> the Dev Mode MCP server enabled**; the bundled `mcp.json` points at the local endpoint
> `http://127.0.0.1:3845/mcp` (switch to Figma's remote MCP URL if you use that instead).
> The render engine itself is host/local — the bundle only declares the dependency.

## Agent Rules Generation

To generate agent-specific rules files (e.g. for Copilot, Amazon Q), use the `@db-ux/agent-cli`:

```shell
npx @db-ux/agent-cli
```
