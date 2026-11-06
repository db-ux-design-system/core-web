---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTable): support more than 20 columns via `--db-table-grid-template-columns`

The table detects up to 20 columns automatically. Wider tables fell back to a single grid track and stacked every cell, and `--db-table-grid-template-columns` had no effect there. It now applies to any column count, so wider tables can define their grid tracks with it, e.g. `--db-table-grid-template-columns: repeat(25, 1fr)`. The caption now spans all columns, including custom ones. The column detection also generates less CSS.
