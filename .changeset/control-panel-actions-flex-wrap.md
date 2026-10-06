---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBControlPanel): add `flex-wrap` so action groups wrap instead of overflowing

The control panel action groups (`.db-control-panel-actions-1` / `.db-control-panel-actions-2`) relied on the default `flex-wrap: nowrap`, so their items overflowed horizontally once they ran out of space. Adding `flex-wrap: wrap` on both the mobile and desktop layouts lets them wrap onto the next line.
