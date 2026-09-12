---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): preserve an explicit `aria-labelledby`

`aria-labelledby` is a supported pass-through attribute, but mounting `DBDrawerHeader`
(or `DBDialogHeader`) overwrote a consumer-supplied value with its generated heading id,
and a conditional header unmounting removed it without restoring the original. The header
now only sets `aria-labelledby` when the drawer/dialog has no value of its own, and cleanup
only clears the reference the header added, so an explicit consumer value is never renamed
or dropped.
