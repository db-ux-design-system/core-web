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
- a `thead` without controls is now only visually hidden in the list layout
- the colon after the label is removed, the label is rendered as `attr(data-header)` instead of `attr(data-header) ":"`
- new custom property `--db-table-mobile-variant-list-grid-columns` (default `40% 1fr`) sets the grid columns of header label and content, e.g. `30% 1fr`
- the cell padding of the selected `size` is preserved in the list layout
