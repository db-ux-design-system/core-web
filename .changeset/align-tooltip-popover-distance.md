---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBPopover): align tooltip and popover gap distance to `sm`

The popover gap distance now matches the tooltip, using `$db-spacing-fixed-sm` for both instead of `$db-spacing-fixed-md` for the popover. This keeps the spacing consistent with the design.
