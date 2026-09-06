---
"@db-ux/mcp-server": major
"@db-ux/agent-cli": major
---

refactor!: rename the migration API to the generation naming

Renames the consumer-facing identifiers that used the old `v2` / `v3` shorthand tokens to the spelled-out generation naming (DB UX Design System – Generation 2 / – Generation 3). **Breaking** for anyone referencing these by name:

- MCP tool `scan_v2_migration` → `scan_generation_2_migration` (update `autoApprove` lists and any direct `callTool` invocations). The old `scan_v2_migration` name is **removed** in this major.
- `migrate_component` prompt `source_context` documented values now spell out the generation, keeping the product prefix: `db-ui-v1` / `db-ui-v2` → `db-ui-generation-1` / `db-ui-generation-2` (DB UI's own generations) and `db-ux-v1` / `db-ux-v2` / `db-ux-v3` → `db-ux-generation-1` / `db-ux-generation-2` / `db-ux-generation-3`.
- Exported handler `handleScanV2Migration` → `handleScanGeneration2Migration`.
- Consumer power skill `migrate-to-v3` → `migrate-to-generation-3` (folder, `name`, and `power.yaml` reference). The skill's user-utterance triggers keep both the new "generation" phrasings and the legacy "v3" ones, so no invocation recall is lost.
