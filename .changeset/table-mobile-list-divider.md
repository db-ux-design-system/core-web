---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTable): improve divider rendering for `mobileVariant="list"`

- the vertical divider is now drawn by the label (`::before`) of the cell, the cell markup is unchanged
- a header row with interactive controls stays visible in the list layout
- the cell padding of the selected `size` is preserved in the list layout
