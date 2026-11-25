---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat: position floating elements with CSS Anchor Positioning and show them in the top layer (Popover API)

- Affects DBPopover, DBTooltip, DBCustomSelect (dropdown) and the first level of the DBControlPanelNavigationItemGroup popover menus
- The JavaScript positioning is only used as a fallback if the browser does not support `position-area`, `anchor-name` and `anchor-scope`
- While a DBPopover, DBTooltip or DBCustomSelect dropdown is open, the floating element gets `popover="manual"` and is rendered in the top layer, so it is no longer clipped by `overflow` of ancestors
- The floating elements are anchored via `anchor-name: --db-anchor` and `anchor-scope: --db-anchor` on the trigger (`.db-popover`, `[data-has-tooltip]`, the custom select `details`, the group expand button)
- With anchor positioning, closed DBPopover and DBTooltip elements are `display: none` (previously `visibility: hidden` only) and use `position: fixed`. Code which measures a closed element gets a size of 0 now and measurements have to wait until the element is open
- The browser positions the element in the top layer only if it supports anchor positioning and the Popover API, otherwise the JavaScript fallback positions it in the regular layer
- The `data-corrected-placement` attribute is still set to the side the browser flipped the element to
- The `popover-animation` keyframes keep `pointer-events: none` until the end, so a floating element sliding in over its trigger can't catch the pointer and close/reopen endlessly
- The placement of a custom select is read from `data-placement` on the root `.db-custom-select` (the dropdown itself no longer gets the attribute)
- A tooltip which is positioned by the browser gets the inline custom properties `--db-tooltip-arrow-inline-start` and `--db-tooltip-arrow-block-start`, and a floating element taller than the viewport gets the inline styles `overflow` and `max-block-size`
- Without JavaScript the hover bridge (`::before`) of a floating element spans the gap on both sides of its axis, so the pointer can still reach a tooltip which the browser flipped. The arrow of a CSS-only tooltip still follows the requested `data-placement`
