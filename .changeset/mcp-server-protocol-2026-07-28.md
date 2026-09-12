---
"@db-ux/mcp-server": minor
---

feat(mcp-server): serve MCP protocol revision 2026-07-28

The server now answers on both protocol eras: the 2025 `initialize` handshake and the
new 2026-07-28 revision (`server/discover` probe). Hosts that have not adopted
2026-07-28 keep working unchanged.

On the new revision the static tool and prompt lists are advertised as publicly
cacheable for an hour, so hosts no longer re-fetch them on every connection.

This also migrates the package to the MCP TypeScript SDK v2, which replaces the
discontinued `@modelcontextprotocol/sdk` with `@modelcontextprotocol/server` and
requires zod 4.
