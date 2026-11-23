---
"@db-ux/mcp-server": patch
---

fix(MCP server): `scan_generation_2_migration` detects the actual Generation 2 packages and markup

- Detects `@db-ui/core`, `@db-ui/base`, `@db-ui/elements` and the `*-elements` wrappers, including subpaths, SCSS imports and CDN URLs.
- Reports `@db-ui/*-components` and `@db-ui/foundations` as Generation 3 pre-releases instead of Generation 2.
- Detects the React and Vue wrappers of Generation 2 (`<DbButton>`).
- Suggests the same Generation 3 target for a class, its custom element and its wrapper, for example the Control Panel instead of the deprecated Header for `rea-header`, `<db-header>` and `<DbHeader>`.
- Detects hyphenated Generation 2 icon names (`arrow-forward`) and the `iconafter`, `data-icon-before` and `data-icon-after` attributes.
- Adds suggestions or explanations for `elm-chip`, `elm-headline`, `elm-label`, `elm-image`, `rea-grid`, `rea-meta` and `cmp-notification`.
- No longer reports Generation 3 `<db-*>` markup as Generation 2 when the file contains no other Generation 2 markers.
