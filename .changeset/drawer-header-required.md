---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor: DBDrawer with breaking changes

- The `DBDrawer` component now requires a `DBDrawerHeader` component to be passed in the `header` slot.
- The `spacing` property has been removed from `DBDrawer`.
- The default `direction` has changed from `right` to `to-left`.
- The `width` property has been renamed to `containerSize`.
- The `direction` values have been renamed from `right`/`left` to `to-left`/`to-right`.
