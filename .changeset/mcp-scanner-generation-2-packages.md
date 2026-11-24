---
"@db-ux/mcp-server": minor
---

feat(MCP server): `scan_generation_2_migration` detects the actual Generation 2 packages and markup

- Detects `@db-ui/core`, `@db-ui/base`, `@db-ui/elements` and the `*-elements` wrappers, including subpaths, SCSS imports and CDN URLs.
- Reports `@db-ui/*-components` and `@db-ui/foundations` as Generation 3 pre-releases instead of Generation 2.
- Detects the React and Vue wrappers of Generation 2 (`<DbButton>`).
- Suggests the same Generation 3 target for a class, its custom element and its wrapper, for example the Control Panel instead of the deprecated Header for `rea-header`, `<db-header>` and `<DbHeader>`.
- Detects hyphenated Generation 2 icon names (`arrow-forward`) and the `iconafter`, `data-icon-before` and `data-icon-after` attributes.
- Adds suggestions or explanations for `elm-chip`, `elm-headline`, `elm-label`, `elm-image`, `rea-grid`, `rea-meta` and `cmp-notification`.
- No longer reports Generation 3 `<db-*>` markup as Generation 2 when the file contains no other Generation 2 markers.
- Adds notes for `cmp-notification` (the `hovering` wrapper becomes `variant="standalone"`) and `cmp-card` (custom layouts belong on a wrapper inside the card).
- The general migration guide describes the DB Theme setup: imports, decryption of the encrypted assets and the Vite alias.
- New migration guide `review-migration`: the decisions and manual checks a mapping cannot cover (layout, behavior, accessibility, values the scan does not detect yet). The scan report, the agent instructions and the `migrate_component` prompt point to it, and the migration output ends with "Open decisions and checks".
- Component migration docs for Breadcrumb, Dialog and Loading Indicator, and notes on the notification wrapper and the card layout.
- New tool `plan_migration`: reads `package.json`, asks for application type, framework, what the interface is built with, DB Theme and browser inspection, and returns the workflow that fits, for example classification of self-built controls with the Chrome DevTools MCP.
- `scan_generation_2_migration` reports self-built controls (`candidate`) and hard-coded colors, sizes and shadows (`value`).
- `scan_generation_2_migration` ignores comments, skips image, font and media files, and tells framework projects that the framework package is enough for `@db-ui/core`.
- `plan_migration` starts with the scan, names the guide each step needs, captures the original pages before the migration and lets the agent continue without asking between steps.
- The manifest build warns when the framework outputs are missing and `get_example_code` would return nothing.
- The migration guides cover defaults (page width, tooltips on icon-only buttons), heading order, contrast, valid markup, live regions, controlled React fields, logical CSS properties, sizes without a token, badge or tag, and the expected visual changes of form fields and headings.
- New migration guide `custom-component-migration` for self-built controls and other libraries. `general-migration` names npm 12 and `npm rebuild` for the DB Theme install scripts.
