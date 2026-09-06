---
"@db-ux/mcp-server": minor
---

feat: add `scan_generation_2_migration` tool, deprecate `scan_v2_migration`

Adds `scan_generation_2_migration` as the canonical name for the migration scanner, aligning it with the DB UX Design System – Generation 2 / Generation 3 naming. The previous `scan_v2_migration` name is now **deprecated**: it still delegates to the same handler so existing MCP configurations keep working, but it is scheduled for removal in the next major release — prefer `scan_generation_2_migration` going forward. The consumer power bundle (`mcp.json` and the migration skill) out of `@db-ux/agent-cli` node package now references the new name.
