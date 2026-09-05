---
"@db-ux/core-eslint-plugin": minor
---

feat: add `dialog-header-required` rule to the recommended config

- New `dialog-header-required` rule: reports a `DBDialog` usage whose `header` slot does not contain a `DBDialogHeader` (React, Angular, Vue).
- `sub-component-required-parent` now covers `DBDialogHeader` and `DBDialogFooter`, `close-button-text-required` now covers `DBDialogHeader`.
