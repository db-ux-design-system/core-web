---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBFooter): add the composable DBFooter, DBFooterContent and DBFooterMeta components

`DBFooter` renders the native `contentinfo` landmark and the layout container with the
optional `width` variants. `DBFooterContent` holds the primary area, `DBFooterMeta` the
secondary one including an optional `copyright` holder, for which the component prepends
the copyright symbol. Both areas are optional, so consumers compose only the parts they
need and wrap navigational content in a labelled `nav` themselves.

Inside `DBFooterMeta` the copyright and the secondary content sit side by side from a
viewport width of 768 px upwards, with the copyright aligned to the top of the row, and
stack below that. `data-force-mobile="true"` on the footer forces the stacked
arrangement, for a footer placed in a region narrower than the viewport suggests.
