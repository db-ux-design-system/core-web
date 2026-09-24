---
"@db-ux/mcp-server": patch
---

fix(mcp-server): return a readable error when `get_example_code` fails

The catch block in `handleGetExampleCode` named its parameter `error`, shadowing the
imported `error()` helper. On the error path it therefore called the caught exception as
a function and threw `TypeError: error is not a function`, so the host received an opaque
JSON-RPC error instead of the intended readable tool result — and the original cause was
lost.
