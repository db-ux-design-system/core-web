---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

refactor: remove roundness not controlled by `db-border-radius` variables in preparation for the new DB Theme

- `DBTooltip`: drop the hardcoded `border-radius` on the tooltip arrow
- `DBLoadingIndicator`: remove the rounded line caps (`stroke-linecap: round`) from the circular segment; the segment length is now driven by the true circumference so it still works with a percentage and shows a fixed 25% arc while indeterminate
- `DBDrawer`: deprecate the `rounded` property (`@deprecated`) and stop setting it internally in `DBHeader` and `DBControlPanelMobile`; the property still works for now
