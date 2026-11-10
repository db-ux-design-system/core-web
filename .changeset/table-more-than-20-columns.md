---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTable): support more than 20 columns via `--db-table-columns`

The table detects up to 20 columns automatically. Wider tables fell back to a single grid track and stacked every cell. Set the column count with the new `--db-table-columns` custom property, e.g. `--db-table-columns: 25`. For custom tracks, `--db-table-grid-template-columns` now applies to any column count as well. The caption now spans all columns, including custom ones. In browsers with [typed `attr()` support](https://caniuse.com/css3-attr), `colspan` and `rowspan` values above 20 work, too. The column detection also generates less CSS.
