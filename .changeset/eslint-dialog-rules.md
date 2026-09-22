---
"@db-ux/core-eslint-plugin": minor
---

feat: dialog/drawer accessibility rules

- New `dialog-header-required` rule (recommended): reports a `DBDialog` whose `header` slot has no `DBDialogHeader`, across React, Angular and Vue. `drawer-header-required` shares the same implementation.
- `sub-component-required-parent` now covers `DBDialogHeader`/`DBDialogFooter`; `close-button-text-required` and `text-or-children-required` now cover `DBDialogHeader`/`DBDrawerHeader` (a header without an accessible name or close-button label is reported).
