---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBTable): markup changes for `mobileVariant="list"` and expandable rows

- cells of a column whose header cell has `data-no-text="true"` no longer get a `data-header` attribute, set `data-header` only for columns with a visible header text
- `td[data-horizontal-alignment="end"]` only uses `justify-content: space-between` in `mobileVariant="list"` when the cell has a `data-header`, otherwise it keeps the end alignment
- expandable row: `<td><details><summary data-table-row-trigger="true">…</summary><div>…</div></details></td>` inside a `<tr>` with `data-interactive="true"`, the cell and the `<details>` get `display: contents`
