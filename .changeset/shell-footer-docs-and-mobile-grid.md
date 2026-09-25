---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBShell): stop reserving an empty sub-navigation row on mobile

The mobile grid templates declared the `sub-navigation` row unconditionally, while the desktop templates guard it with `:has()`. Without a sub-navigation the empty row captured any unplaced child of `DBShell` -- a `DBFooter` added as a direct child was rendered between the control panel and the content instead of below it. The mobile templates now add the row only when a sub-navigation is present, matching desktop.

Also documents the supported composition: a footer belongs in the `endSlot` of `DBShellContent`, not in `DBShell`.
