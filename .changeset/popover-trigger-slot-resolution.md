---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBPopover): resolve the trigger independently of its child position

- `getTrigger` now locates the slotted trigger host via `slot="trigger"` (web components), the `trigger` attribute (Angular), or the first child that is not `.db-popover-content`, instead of assuming it is `children[0]` with at least two children
- for a custom-element trigger host (e.g. `db-button`), the focusable control is now found with `querySelector` because Stencil's `experimentalSlotFixes` slot relocation no longer exposes it via `host.children`
- keeps `aria-haspopup` and `aria-expanded` on the trigger when the slot relocation reorders children or inserts marker nodes
