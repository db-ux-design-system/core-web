---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBStack): stop clipping the focus ring of child elements

`DBStack` no longer sets `overflow: auto`. The scroll container clipped to its padding box and
therefore cut off the focus ring of its children, which sits outside their border box - in a
stack sized to its content the ring was invisible on all four sides. If you relied on the
stack scrolling, set `overflow` on it yourself.
