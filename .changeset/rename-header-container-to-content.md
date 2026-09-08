---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

refactor(DBDrawerHeader): rename header heading element class from `-header-container` to `-header-content`

- The heading wrapper inside `DBDrawerHeader` and `DBDialogHeader` now uses the class `db-drawer-header-content` / `db-dialog-header-content` instead of `db-drawer-header-container` / `db-dialog-header-container`.
- And the start slot has been moved out of this element and inserted before it. Consumers targeting the old class in their own CSS or tests need to update the selector.
