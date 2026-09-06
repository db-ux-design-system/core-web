---
"@db-ux/mcp-server": minor
---

feat: add `scan_generation_2_migration` tool, deprecate `scan_v2_migration`

Adds `scan_generation_2_migration` as the canonical name for the migration scanner, aligning it with the DB UX Design System – Generation 2 / Generation 3 naming. The previous `scan_v2_migration` tool stays registered as a **deprecated alias** that delegates to the same handler, so existing MCP configurations keep working unchanged. The alias' description points to the new name; prefer `scan_generation_2_migration` going forward. The consumer power bundle (`mcp.json` and the migration skill) out of `@db-ux/agent-cli` node package now references the new name.
