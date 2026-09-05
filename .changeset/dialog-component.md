---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

- feat: add DBDialog, DBDialogHeader and DBDialogFooter based on the native dialog element
    - `DBDialog` renders a native `<dialog>` element, relies on its native centring and top-layer behaviour and supports the `backdrop` (`strong`, `weak`, `none`) and `containerSize` (`small`, `medium`, `large`, `full`) properties.
    - `DBDialogHeader` provides the heading, `startSlot`/`endSlot` and the close button, and wires `aria-labelledby` automatically; `DBDialogFooter` holds the dialog actions.
    - The dialog can be opened and closed declaratively via `open`, natively via Invoker Commands (`command`/`commandfor`) or `<form method="dialog">`, and reports `onClose` and `onCancel`.
    - The maximum inline size can be adjusted with `--db-dialog-max-width`, the viewport distance with `--db-dialog-viewport-inset`.
