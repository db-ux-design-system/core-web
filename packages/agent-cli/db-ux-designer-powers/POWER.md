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

## MCP Servers

| Server  | Node Package        | Purpose                                            |
| ------- | ------------------- | -------------------------------------------------- |
| `db-ux` | `@db-ux/mcp-server` | Live component, token, and icon verification (docs) |

> **Note — render MCP:** The `generate-figma-screen` skill RENDERS into Figma and therefore
> needs a Figma **write** MCP (the tool that executes plugin code, e.g. `use_figma`) provided
> by the host. The bundled `mcp.json` wires only `@db-ux/mcp-server` (docs); confirm and wire
> the render MCP in the host before running the skill.

## Agent Rules Generation

To generate agent-specific rules files (e.g. for Copilot, Amazon Q), use the `@db-ux/agent-cli`:

```shell
npx @db-ux/agent-cli
```
