---
"@db-ux/mcp-server": patch
---

fix(mcp-server): correct `docs_search` matching and the `scan_v2_migration` report

`docs_search` no longer answers a query whose terms are all shorter than three
characters with three arbitrary documents. Those terms were discarded before
matching, and an empty term list matched every document, so the result looked
like a search hit while it was not. An explicitly empty query still lists the
docs in scope, as documented. A `component` search without `componentName` is
now rejected instead of silently searching all documentation, and the
"more than 3 results" notice is reachable at all — the search loop stopped at
exactly three results, so the caller was never told that matches were withheld.

`scan_v2_migration` caps the number of reported findings instead of truncating
the rendered report. Cutting the text left the JSON cut mid-object inside an
unterminated fenced block, so no finding could be parsed while the header still
claimed the full count. Long reports now list as many findings as fit, state how
many were omitted, and stay parsable. The tool also routes its input through the
hardened path helper, which rejects percent-encoded traversal attempts, and that
helper no longer rejects a legitimate filename containing a literal `%`.
