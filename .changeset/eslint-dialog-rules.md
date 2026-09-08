---
"@db-ux/core-eslint-plugin": minor
---

feat: add `dialog-header-required` rule to the recommended config

- New `dialog-header-required` rule: reports a `DBDialog` usage whose `header` slot does not contain a `DBDialogHeader` (React, Angular, Vue).
- `sub-component-required-parent` now covers `DBDialogHeader` and `DBDialogFooter`, `close-button-text-required` now covers `DBDialogHeader`.
- `sub-component-required-parent` no longer reports React sub-components whose placement cannot be verified statically (e.g. extracted into a variable `const header = <DBDialogHeader />` and passed via `header={header}`), matching how `dialog-header-required` treats dynamic slot values.
- `dialog-header-required` no longer accepts `slot="header"` in Angular templates: Angular projects the named region via `<ng-content select="[header]">`, so only the `header` attribute enters the slot. This aligns the rule with `sub-component-required-parent`.
- `text-or-children-required` now covers `DBDialogHeader` and `DBDrawerHeader`, so a header without `text` or children is reported (it would otherwise leave the dialog without an accessible name via `aria-labelledby`). An empty or whitespace-only `text` value (e.g. `text=""`, including its Angular/Vue equivalents) counts as missing content, not as a valid title.
- `dialog-header-required` no longer reports a `DBDialog` that receives a JSX spread (e.g. `<DBDialog {...dialogProps}>`), because the spread may supply the `header` prop and its contents cannot be verified statically.
