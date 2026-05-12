---
"@db-ux/agent-cli": minor
---

Add Kiro Power and Skills for DB UX Design System

Adds `db-ux-power/` and `skills/` to the published package, providing structured AI agent workflows for Kiro and compatible tools (Cursor, Claude Code, etc.):

- **`db-ux-power/`** — Power manifest with MCP server config and three steering workflows: implement component, migrate v2→v3, create project rules
- **`skills/db-ux-implement-component`** — Discovery-first workflow for building UI with DB UX components
- **`skills/db-ux-migrate-to-v3`** — Scan-guided migration from DB UI v2 (`cmp-*`, `elm-*`, `db-color-*`) to v3
- **`skills/db-ux-create-rules`** — Generate project-specific agent rules for any DB UX project
- **`skills/db-ux-add-eslint-rule`** — Full workflow for adding rules to `@db-ux/core-eslint-plugin`
- **`skills/db-ux-develop-component`** — Develop new Mitosis components in the design system monorepo
