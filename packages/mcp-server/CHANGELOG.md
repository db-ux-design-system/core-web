# @db-ux/mcp-server

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
