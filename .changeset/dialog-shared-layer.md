---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

refactor: share dialog logic and styles between DBDrawer and DBDialog

- `DBDrawer` now uses the shared dialog utils, the shared dialog style mixins and the isolated ponyfill module instead of its own copies. Appearance and public API stay unchanged.
- Fixes the `open={undefined}` behaviour: an unset `open` no longer counts as "closed" and therefore no longer closes a drawer that was opened natively (e.g. through `command="show-modal"`). The element is left untouched until `open` is set to `true` or `false`.
- `supportsClosedBy` and `supportsCommandFor` moved into the new `utils/dialog-ponyfill` module and stay importable from the package root.
