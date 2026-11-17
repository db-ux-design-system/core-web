---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBTable): improve divider rendering for `mobileVariant="list"`

- the content of `DBTableDataCell` is now wrapped in `<div class="db-table-data-cell-content">` inside the `<td>` (previously rendered directly in the `<td>`)
- the content of `DBTableHeaderCell` is now wrapped in `<div class="db-table-header-cell-content">` inside the `<th>` (previously rendered directly in the `<th>`)
- a header row with interactive controls stays visible in the list layout
- the cell padding of the selected `size` is preserved in the list layout
