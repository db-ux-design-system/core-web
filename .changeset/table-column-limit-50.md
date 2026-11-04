---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTable): lay out tables with up to 50 columns correctly

The column count detection stopped at 20 columns, so wider tables fell back to a single grid track and stacked every cell. The table now detects up to 50 columns, and `colspan`/`rowspan` support the same range. For tables with more than 50 columns, `--db-table-grid-template-columns` defines the grid tracks directly.
