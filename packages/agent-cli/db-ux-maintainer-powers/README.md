# db-ux-maintainer-powers

> Local AI automation bundle for the DB UX Design System.

## What is this?

A [Kiro Power](https://www.promptz.dev/powers) / [Superpowers](https://github.com/obra/superpowers)-compatible bundle that ensures AI agents (Kiro, Claude Code, Copilot, Amazon Q) follow our strict architecture rules when generating or modifying components.

## Quick Start

1. Ensure Node.js 24+ and pnpm are installed.
2. Copy `.env.template` → `.env` and set `COMMIT_MAIL`.
3. Run `pnpm install --ignore-scripts`.
4. The Power activates automatically when an AI agent detects `power.yaml`.

## Structure

```text
db-ux-maintainer-powers/
├── power.yaml          # Manifest (steering, skills, mcp)
├── POWER.md            # Human-readable scope & invariants
├── mcp.json            # MCP server configuration
├── context/
│   └── architecture.md # Single source of truth (auto-loaded)
└── skills/
    ├── TEMPLATE.md     # Base template for creating new skills
    ├── create-db-component/
    │   └── SKILL.md    # TDD workflow for new components
    ├── modify-db-component/
    │   └── SKILL.md    # TDD workflow for modifying existing components
    └── test-component/
        └── SKILL.md    # Run, analyze, and fix Playwright tests
```

## Architecture & Interconnection

```text
┌─────────────────────────────────────────────────────────┐
│  power.yaml + POWER.md        (Orchestration & Scope)   │
│  ─ Registers context, skills, MCP servers               │
│  ─ Defines invariants & bundle boundaries               │
├─────────────────────────────────────────────────────────┤
│  context/architecture.md      (Single Source of Truth)   │
│  ─ Auto-loaded globally via power.yaml steering         │
│  ─ Technology boundaries, naming, tokens, forbidden     │
│    patterns — ALL skills inherit these rules             │
├─────────────────────────────────────────────────────────┤
│  skills/<name>/SKILL.md       (Execution Blueprints)    │
│  ─ Procedural TDD workflows (RED → GREEN → REFACTOR)   │
│  ─ YAML frontmatter: inputs, tools, error handling      │
│  ─ Enforce architecture.md invariants locally           │
└─────────────────────────────────────────────────────────┘
```

| Layer             | File(s)                   | Role                                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Orchestration** | `power.yaml`, `POWER.md`  | Declarative manifest that registers the global context and all available skills. `POWER.md` is the human-readable scope definition with non-negotiable invariants (token-only styling, Mitosis as single source, etc.).                                                                                     |
| **Global Rules**  | `context/architecture.md` | Iron ruleset auto-loaded into every agent session. Defines technology boundaries, naming conventions, folder structures, and forbidden patterns. Every skill builds on this foundation.                                                                                                                     |
| **Skills**        | `skills/*/SKILL.md`       | Specific, procedural workflows (create, modify, test). They inherit and enforce the global invariants from `architecture.md`. Their YAML frontmatter declares precise inputs, required MCP tools, and error scenarios. The Markdown body guides the agent through a deterministic state machine (TDD loop). |

**Flow:** `power.yaml` loads `architecture.md` globally → Agent receives a trigger → matching `SKILL.md` activates → skill enforces architecture rules throughout execution → MCP tools provide runtime verification.

## MCP Servers Required

| Server              | Connection                              |
| ------------------- | --------------------------------------- |
| `@db-ux/mcp-server` | stdio (no auth needed)                  |
| Figma Desktop MCP   | HTTP/SSE at `http://127.0.0.1:3845/mcp` |

> **Note:** The Figma Desktop MCP server requires the Figma Desktop App to be running with Dev Mode MCP enabled.

## Adding New Skills

1. Copy `skills/TEMPLATE.md` to `skills/<skill-name>/SKILL.md` and adapt the frontmatter (`name`, `triggers`, `inputs`, `tools`, `outputs`). Always base new skills on the template to avoid architecture drift.
2. Register the skill in `power.yaml` under `skills:`.
3. Follow TDD: RED → GREEN → REFACTOR.
