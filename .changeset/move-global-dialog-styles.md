---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor(DBDialog)!: scope the native `dialog` element styles to the components

Breaking change: styling is no longer applied to the bare `dialog` element - only to `.db-dialog` and `.db-drawer`. If you relied on the design system styling native `<dialog>` elements that are not DB components, scope your own styles to those elements. The rendered output of `DBDialog` and `DBDrawer` themselves is unchanged.

The `styles/dialog-init` Sass entry point was also removed. If you imported it for its global `dialog` reset, drop the import; if you used its `$backdrop-color-strong` / `$backdrop-color-weak` variables, they moved to the internal `styles/internal/dialog-components` partial (no stability guarantee - prefer defining your own tokens). See the [v5 → v6 migration guide](https://github.com/db-ux-design-system/core-web/blob/main/docs/migration/v5.x.x-to-v6.0.0.md).
