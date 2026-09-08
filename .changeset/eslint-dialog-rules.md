---
"@db-ux/core-eslint-plugin": minor
---

feat: add `dialog-header-required` rule to the recommended config

- New `dialog-header-required` rule: reports a `DBDialog` usage whose `header` slot does not contain a `DBDialogHeader` (React, Angular, Vue).
- `sub-component-required-parent` now covers `DBDialogHeader` and `DBDialogFooter`, `close-button-text-required` now covers `DBDialogHeader`.
- `sub-component-required-parent` no longer reports React sub-components whose placement cannot be verified statically (e.g. extracted into a variable `const header = <DBDialogHeader />` and passed via `header={header}`), matching how `dialog-header-required` treats dynamic slot values.
- `text-or-children-required` now covers `DBDialogHeader` and `DBDrawerHeader`, so a header without `text` or children is reported (it would otherwise leave the dialog without an accessible name via `aria-labelledby`).
