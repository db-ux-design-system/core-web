---
"@db-ux/core-foundations": patch
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBStack): `overflow: auto` removed - a stack no longer scrolls

It clipped the focus ring of its children. Content that does not fit is now visible outside the
stack instead of being scrollable; set `overflow` on the stack yourself if you relied on it.
`wrap` keeps the scroll container, with room reserved for the ring.
