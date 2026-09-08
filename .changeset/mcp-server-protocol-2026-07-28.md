---
"@db-ux/mcp-server": minor
---

feat(mcp-server): serve MCP protocol revision 2026-07-28

The server now answers on both protocol eras: the 2025 `initialize` handshake and
the new 2026-07-28 revision (`server/discover` probe). Registration moved into a
`buildServer()` factory served through `serveStdio`, which pins one instance per
connection and selects the era from the opening exchange. Hosts that have not
adopted 2026-07-28 keep working unchanged.
