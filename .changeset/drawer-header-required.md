---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor: require `DBDrawerHeader` in `header` slot, remove `spacing` property, and change default `direction` to `left` for `DBDrawer`

- The `DBDrawer` component now requires a `DBDrawerHeader` component to be passed in the `header` slot.
- The `spacing` property has been removed from `DBDrawer`.
- The default `direction` has changed from `right` to `left`.
