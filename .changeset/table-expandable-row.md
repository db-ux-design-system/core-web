---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBTable): support expandable rows with `details` and `summary`

- put a `<details>` into a cell of an interactive row and mark its `<summary>` with `data-table-row-trigger="true"`, the whole row then toggles the details
- the opened content spans the full row below the cells, for the default table layout and for `mobileVariant="list"`
- a `<summary>` with `data-icon="chevron_down"` rotates its icon while the details are open
- the opened content has the `level-2` background, for `variant="zebra"` it keeps the background color of its own row
- fix: a `noText` header cell no longer shows up as an empty item in the header row of `mobileVariant="list"`
- fix: cells of a `noText` column no longer show the header text as visual label in `mobileVariant="list"`
