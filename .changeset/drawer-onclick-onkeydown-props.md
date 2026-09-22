---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBDrawer): expose the `onClick` and `onKeyDown` props

`DBDrawer` binds its own `click`/`keydown` listeners for the `closedby` ponyfill
(backdrop and Escape dismissal). In the generated React component the explicit
listeners overwrite the native `onClick`/`onKeyDown` forwarded by
`filterPassingProps`, so a consumer's handler never fired. Both props are now
declared in `DBDrawerProps` and composed inside the internal handlers, so a
consumer callback runs alongside the ponyfill across all framework outputs.
