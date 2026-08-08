---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

fix(Drawer)!: not closing the drawer only on a controlled component anymore

**BREAKING CHANGE**: In case that you'd like to fully control (and not just synchronize the drawers `open` state), you can't prevent the closing in the `onClose` callback anymore, but need to use the new `onCancel` callback for that from now on.

The drawer now sets the native `closedby` HTML attribute on the included `<dialog>` HTML element (`"any"` by default, `"closerequest"` when `backdrop="none"`). In browsers that support `closedby`, ESC and backdrop dismissals are handled natively by the browser.

A new `onCancel` callback fires when the browser issues a native close request (ESC key, Android Back gesture). Consumers can call `event.preventDefault()` in their `onCancel` handler to veto the close. If not vetoed, `onClose` fires afterwards as usual.
