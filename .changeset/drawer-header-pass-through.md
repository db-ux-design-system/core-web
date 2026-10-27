---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat(DBControlPanelMobile): expose the drawer header for customization

- add `closeButtonText` and `closeButtonId` properties, forwarded to the internal drawer header, so the close button tooltip is configurable (i18n)
- add a `drawerHeader` slot that replaces the internal drawer header when `drawerHeaderText` is not set, so action elements or a subtitle can be placed next to the close button (the consumer then provides the close button, e.g. via `DBDrawerHeader`)
- when `drawerHeaderText` is set, the internal drawer header is rendered as before, so existing usage is unchanged
