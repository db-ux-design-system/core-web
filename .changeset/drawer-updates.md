---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBDrawer): new event props and renamed header content class

- Adds the `onClick`, `onKeyDown` and `onCancel` props to `DBDrawerProps` (matching `DBDialog`). They are composed with the internal ponyfill handlers, so a consumer callback fires and `onCancel` can veto a native close via `event.preventDefault()`.
- Renames the heading wrapper class `db-drawer-header-container` to `db-drawer-header-content` (same for `db-dialog-header-content`) and moves the start slot before it. Update selectors that target the old class.
