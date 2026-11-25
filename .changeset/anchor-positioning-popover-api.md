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
- With anchor positioning, closed DBPopover and DBTooltip elements are `display: none` (previously `visibility: hidden` only) and use `position: fixed`
- The `data-corrected-placement` attribute is still set to the side the browser flipped the element to
- The `popover-animation` keyframes keep `pointer-events: none` until the end, so a floating element sliding in over its trigger can't catch the pointer and close/reopen endlessly
