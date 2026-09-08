---
"@db-ux/mcp-server": patch
---

refactor(mcp-server): migrate to MCP TypeScript SDK v2

Replaces the discontinued `@modelcontextprotocol/sdk` with the split v2 packages
(`@modelcontextprotocol/server`, plus `@modelcontextprotocol/client` for the stdio E2E test)
and moves the tool and prompt schemas from `zod/v3` to zod 4, since SDK v2 dropped zod 3
support. The served protocol revision is unchanged, so hosts see identical behaviour.
