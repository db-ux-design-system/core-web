---
"@db-ux/mcp-server": patch
---

fix(mcp-server): stop advertising `html` for `get_example_code`, fail fast on a dead transport

The `framework` enum of `get_example_code` offered `html`, which the handler
could only answer with an error: plain HTML has no generated examples. Hosts were
shown a value that always failed. The enum is now narrowed to the four
frameworks that do have generated example code (`react`, `angular`, `vue`,
`web-components`), and the tool description points at the HTML documentation
instead. The handler keeps its guard, because it is exported from the package
root and a library caller can still pass the other values.

A failed stdio startup no longer looks like a clean shutdown. `serveStdio`
reports a rejected transport start through `onerror` and then swallows the
rejection, which left the process alive with no transport and exiting `0`. The
server now exits `1` in that case. Errors that arrive once a connection has been
served are still only logged, so a single bad line does not end a live session.
