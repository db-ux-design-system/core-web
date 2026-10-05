---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor(DBDialog)!: scope the native `dialog` element styles to the components

Breaking change: styling is no longer applied to the bare `dialog` element - only to `.db-dialog` and `.db-drawer`. If you relied on the design system styling native `<dialog>` elements that are not DB components, scope your own styles to those elements. The rendered output of `DBDialog` and `DBDrawer` themselves is unchanged.
