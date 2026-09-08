---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): dismiss non-modal drawers via Escape without `closedby` support

A non-modal `DBDrawer` (`backdrop="none"`, `variant="inside"` or `position="absolute"`, opened via `show()`)
sets `closedby="closerequest"`, which browsers without `closedby` support (e.g. Firefox ESR) silently ignore.
Escape therefore did not dismiss such drawers. The ponyfill now closes the native `<dialog>` on Escape when
`closedby` is unsupported and the element is non-modal; modal drawers keep their native Escape behaviour and
supporting browsers are untouched.
