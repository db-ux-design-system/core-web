---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBControlPanel): reveal drilldown sub-navigation on the web component output

- The previous-level slide-out transform was applied to the whole navigation item group element on the host-wrapped (web component) output, turning it into the open overlay's containing block and dragging the sub-navigation off-screen (sub-items collapsed to zero height).
- The slide-out now always targets the group's expand button, never the group element that wraps the overlay, so the drilldown overlay stays anchored to the scroll container across all framework outputs.
