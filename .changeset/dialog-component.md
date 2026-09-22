---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBDialog): add `DBDialog`, `DBDialogHeader` and `DBDialogFooter`

- Based on the native `<dialog>` element, using its centring and top-layer behaviour. Supports `backdrop` (`strong`, `weak`, `none`) and `containerSize` (`small`, `medium`, `large`, `full`).
- Open/close declaratively via `open`, natively via Invoker Commands (`command`/`commandfor`) or `<form method="dialog">`; reports `onClose` and `onCancel`.
- `DBDialogHeader` provides the heading, `startSlot`/`endSlot` and the close button, and composes the dialog's `aria-labelledby` (appending its heading id, preserving a consumer value; a consumer `aria-label` still wins). `DBDialogFooter` holds the actions.
- Adjust the max inline size with `--db-dialog-max-width` and the viewport distance with `--db-dialog-viewport-inset`.
