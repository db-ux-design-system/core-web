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
many were omitted, and stay parsable.

The report header is bounded too. It lists every unique v2 component name it
found, so a large legacy stylesheet could push the response past the output
limit through the header alone and leave no budget for a single finding — which
produced a report advising the caller to migrate "the first 0 findings". The
name list is now capped with an omitted count, the full counts are unaffected,
and a report with no room for any finding says so.

The tool also routes its input through the hardened path helper, which rejects
percent-encoded traversal attempts. That helper validates the percent-decoded
form but no longer resolves it: decoding a real filesystem path rewrote a
legitimate name such as `report%20final.tsx` into a different file
(`report final.tsx`) and reported the requested one as missing. A literal `%` in
a filename is accepted as before.
