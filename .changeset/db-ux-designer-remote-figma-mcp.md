---
"@db-ux/agent-cli": patch
---

docs: point the Figma MCP configuration and docs at Figma's remote server

The designer bundle documented and configured the Figma Dev Mode MCP via the local desktop
endpoint (`http://127.0.0.1:3845/mcp`), which is not the path in use — all Figma access runs
through Figma's remote MCP.

- `db-ux-designer-powers/mcp.json`: `figma.url` now points at `https://mcp.figma.com/mcp`
  (HTTP + Figma OAuth on first use); the description states that no desktop app or local
  server is involved and that a local/desktop endpoint must not be configured.
- `db-ux-designer-powers/POWER.md` and `packages/agent-cli/AGENTS.md`: MCP tables and notes
  updated accordingly, including an explicit rule never to configure, probe or call a local
  Figma MCP endpoint.
- `db-ux-maintainer-powers/README.md`: the required-servers table claimed a Figma Desktop MCP
  over `http://127.0.0.1:3845/mcp`, while that bundle's `mcp.json` actually declares the
  read-only `figma-developer-mcp` over stdio with `FIGMA_API_KEY`. Corrected to match.
