---
"@db-ux/mcp-server": patch
---

fix(mcp-server): exit after an uncaught exception instead of continuing, so an orphaned server can no longer keep running at 100% CPU
