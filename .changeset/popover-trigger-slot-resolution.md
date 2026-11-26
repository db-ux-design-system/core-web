---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBPopover): resolve the trigger independently of its child position

- `getTrigger` now locates the slotted trigger host via `slot="trigger"` (web components), the `trigger` attribute (Angular), or the first child that is not `.db-popover-content`, instead of assuming it is `children[0]` with at least two children
- for a custom-element trigger host (e.g. `db-button`), the focusable control is now found with `querySelector` instead of `host.children`, so `aria-haspopup` and `aria-expanded` are still applied when the web-component build relocates slotted nodes
- fixes the controlled-mode popover trigger losing its `aria-expanded` state under the opt-in `experimentalSlotFixes` web-component build
