---
"@db-ux/core-components": patch
---

fix(DBTable): wrap cell content in a content element

- the content of `DBTableDataCell` is now wrapped in `<div class="db-table-data-cell-content">` inside the `<td>` (previously rendered directly in the `<td>`)
- the content of `DBTableHeaderCell` is now wrapped in `<div class="db-table-header-cell-content">` inside the `<th>` (previously rendered directly in the `<th>`)
