---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTable): `mobileVariant="list"` no longer applies the spaced styles on wide screens

- the row gap, the card border of the rows and the transparent header row of `variant="spaced"` now only apply to `mobileVariant="list"` below the `sm` breakpoint of the table
