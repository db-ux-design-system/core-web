---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

refactor: remove roundness not controlled by `db-border-radius` variables in preparation for the new DB Theme

- `DBTooltip`: drop the hardcoded `border-radius` on the tooltip arrow
- `DBLoadingIndicator`: remove the rounded line caps (`stroke-linecap: round`) from the circular segment; the segment length is now driven by the true circumference so it still works with a percentage and shows a fixed 25% arc while indeterminate. **Visible change:** the indeterminate arc is now a fixed 25% for both orientations. The horizontal spinner is roughly unchanged, but the vertical spinner's arc grows from about 19% to 25% because the removed round line caps no longer add visual length to the segment.
- `DBDrawer`: deprecate the `rounded` property (`@deprecated`) and stop setting it internally in `DBHeader` and `DBControlPanelMobile`; the property still works for now. **Visible change:** the `DBHeader` and `DBControlPanelMobile` drawers lose their rounded corners (they no longer pass `rounded` to the drawer). Their corner radius is now governed by the `db-border-radius` tokens from the DB Theme instead of this hardcoded opt-in.
