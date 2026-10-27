---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat(DBHeader): add `header` slot to replace the internal drawer header

- the `header` slot replaces the internal drawer header when `drawerHeaderText` is not set, so action elements or a subtitle can be placed next to the close button (the consumer then provides the close button, e.g. via `DBDrawerHeader`, and `closeButtonId` / `closeButtonText` have no effect)
- when `drawerHeaderText` is set, the internal drawer header is rendered as before, so existing usage is unchanged
- note: `@db-ux/wc-core-components` strips the internal `db-drawer` from `db-header` (the mobile drawer is handled by `db-shell`), so the `header` slot has no effect there; use `db-control-panel-mobile` for the web-component mobile drawer header
