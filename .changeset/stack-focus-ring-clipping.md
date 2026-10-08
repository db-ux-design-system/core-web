---
"@db-ux/core-foundations": major
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

feat(DBStack): `overflow: auto` removed - a stack no longer scrolls

It clipped the focus ring of its children. Content that does not fit is now visible outside the
stack instead of being scrollable; set `overflow` on the stack yourself if you relied on it.
`wrap` keeps the scroll container, since wrapped items overflow by design.

New `data-focus-container` / `.db-focus-container` helper reserves the room a focus ring needs
inside any clipping container, for the cases where that combination is needed.
