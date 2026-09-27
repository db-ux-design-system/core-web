# @db-ux/mcp-server

## 5.6.0

### Minor Changes

- feat(mcp-server): serve MCP protocol revision 2026-07-28 - [see commit 6c7efc2](https://github.com/db-ux-design-system/core-web/commit/6c7efc2f4057d97bf74f71b28b9f7d70a3c5bf05):
    - The server now answers on both protocol eras: the 2025 `initialize` handshake and the
    - new 2026-07-28 revision (`server/discover` probe). Hosts that have not adopted
    - 2026-07-28 keep working unchanged.
    - On the new revision the static tool and prompt lists are advertised as publicly
    - cacheable for an hour, so hosts no longer re-fetch them on every connection.
    - This also migrates the package to the MCP TypeScript SDK v2, which replaces the
    - discontinued `@modelcontextprotocol/sdk` with `@modelcontextprotocol/server` and
    - requires zod 4.

### Patch Changes

- fix(mcp-server): correct `docs_search` matching and the `scan_v2_migration` report - [see commit 6c7efc2](https://github.com/db-ux-design-system/core-web/commit/6c7efc2f4057d97bf74f71b28b9f7d70a3c5bf05):
    - `docs_search` no longer answers a query whose terms are all shorter than three
    - characters with three arbitrary documents. Those terms were discarded before
    - matching, and an empty term list matched every document, so the result looked
    - like a search hit while it was not. An explicitly empty query still lists the
    - docs in scope, as documented. A `component` search without `componentName` is
    - now rejected instead of silently searching all documentation, and the
    - "more than 3 results" notice is reachable at all — the search loop stopped at
    - exactly three results, so the caller was never told that matches were withheld.
    - `scan_v2_migration` caps the number of reported findings instead of truncating
    - the rendered report. Cutting the text left the JSON cut mid-object inside an
    - unterminated fenced block, so no finding could be parsed while the header still
    - claimed the full count. Long reports now list as many findings as fit, state how
    - many were omitted, and stay parsable.
    - The report header is bounded too. It lists every unique v2 component name it
    - found, so a large legacy stylesheet could push the response past the output
    - limit through the header alone and leave no budget for a single finding — which
    - produced a report advising the caller to migrate "the first 0 findings". The
    - name list is now capped with an omitted count, the full counts are unaffected,
    - and a report with no room for any finding says so.
    - The tool also routes its input through the hardened path helper, which rejects
    - percent-encoded traversal attempts. That helper validates the percent-decoded
    - form but no longer resolves it: decoding a real filesystem path rewrote a
    - legitimate name such as `report%20final.tsx` into a different file
    - (`report final.tsx`) and reported the requested one as missing. A literal `%` in
    - a filename is accepted as before.
- fix(mcp-server): stop advertising `html` for `get_example_code`, fail fast on a dead transport - [see commit 6c7efc2](https://github.com/db-ux-design-system/core-web/commit/6c7efc2f4057d97bf74f71b28b9f7d70a3c5bf05):
    - The `framework` enum of `get_example_code` offered `html`, which the handler
    - could only answer with an error: plain HTML has no generated examples. Hosts were
    - shown a value that always failed. The enum is now narrowed to the four
    - frameworks that do have generated example code (`react`, `angular`, `vue`,
    - `web-components`), and the tool description points at the HTML documentation
    - instead. The handler keeps its guard, because it is exported from the package
    - root and a library caller can still pass the other values.
    - A failed stdio startup no longer looks like a clean shutdown. `serveStdio`
    - reports a rejected transport start through `onerror` and then swallows the
    - rejection, which left the process alive with no transport and exiting `0`. The
    - server now exits `1` in that case. Errors that arrive once a connection has been
    - served are still only logged, so a single bad line does not end a live session.
- fix(mcp-server): resolve `assets/` correctly in the published bundle - [see commit 6c7efc2](https://github.com/db-ux-design-system/core-web/commit/6c7efc2f4057d97bf74f71b28b9f7d70a3c5bf05):
    - The visuals and design-token tools derived their asset paths with a fixed
    - `../../assets`, which is correct for the sources but points one level outside the
    - package once esbuild flattens the server into `dist/index.js`. In the published
    - package `list_visuals` therefore reported an empty directory,
    - `get_visual_reference` failed for every name, `get_design_tokens` served
    - unresolved `var()` references instead of concrete values, and the `elevation`,
    - `border` and `opacity` categories failed outright. The path is now anchored on
    - the package root, which is the same in the sources, the bundle and the tarball.
- fix(mcp-server): return a readable error when `get_example_code` fails - [see commit 6c7efc2](https://github.com/db-ux-design-system/core-web/commit/6c7efc2f4057d97bf74f71b28b9f7d70a3c5bf05):
    - The catch block in `handleGetExampleCode` named its parameter `error`, shadowing the
    - imported `error()` helper. On the error path it therefore called the caught exception as
    - a function and threw `TypeError: error is not a function`, so the host received an opaque
    - JSON-RPC error instead of the intended readable tool result — and the original cause was
    - lost.

## 5.5.0

### Minor Changes

- feat: add `scan_generation_2_migration` tool, deprecate `scan_v2_migration` - [see commit 0abe126](https://github.com/db-ux-design-system/core-web/commit/0abe1268a5a7aa836012b939ceffc0746141dbd1):

    - Adds `scan_generation_2_migration` as the canonical name for the migration scanner, aligning it with the DB UX Design System – Generation 2 / Generation 3 naming. The previous `scan_v2_migration` name is now **deprecated**: it still delegates to the same handler so existing MCP configurations keep working, but it is scheduled for removal in the next major release — prefer `scan_generation_2_migration` going forward. The consumer power bundle (`mcp.json` and the migration skill) out of `@db-ux/agent-cli` node package now references the new name.

## 5.4.0

No changes in this release.

## 5.3.0

_version bump_

## 5.2.1

_version bump_

## 5.2.0

_version bump_

## 5.1.6

_version bump_

## 5.1.5

_version bump_

## 5.1.4

_version bump_

## 5.1.3

### Patch Changes

- fix: remove invalid `@` org scope from `bin` entries in `package.json` - [see commit ff8de1f](https://github.com/db-ux-design-system/core-web/commit/ff8de1ffa813c0f92b9ee78c5920b1b81371c468)

## 5.1.2

_version bump_

## 5.1.1

_version bump_

## 5.1.0

_version bump_

## 5.0.4

_version bump_

## 5.0.3

_version bump_

## 5.0.2

_version bump_

## 5.0.1

_version bump_

## 5.0.0

_version bump_

## 4.14.0

_version bump_

## 4.13.0

_version bump_

## 4.12.1

_version bump_

## 4.12.0

_version bump_

## 4.11.1

_version bump_

## 4.11.0

_version bump_

## 4.10.2

_version bump_

## 4.10.1

_version bump_

## 4.10.0

_version bump_

## 4.9.1

_version bump_

## 4.9.0

_version bump_

## 4.8.0

### Minor Changes

- feat: add type-safe migration map as single source of truth for the v2→v3 scanner. - [see commit f7324f3](https://github.com/db-ux-design-system/core-web/commit/f7324f3576335dcad4a1922c430a576ab01b03fa)

## 4.7.3

_version bump_

## 4.7.2

_version bump_

## 4.7.1

_version bump_

## 4.7.0

_version bump_

## 4.6.1

_version bump_

## 4.6.0

### Minor Changes

- Extract MCP server into standalone package (`@db-ux/mcp-server`) with its own versioning, CHANGELOG, and agent rules. - [see commit 71919aa](https://github.com/db-ux-design-system/core-web/commit/71919aa229f520accb1c7d890b3e7d0044cbe785):
    - The server can now be installed and invoked independently via `npx --yes @db-ux/mcp-server`.
