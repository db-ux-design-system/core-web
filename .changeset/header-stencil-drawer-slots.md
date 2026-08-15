---
"@db-ux/wc-core-components": minor
---

fix(`DBHeader`): give the drawer its own `mobileMetaNavigation` and `mobileSecondaryAction` slots

`metaNavigation` and `secondaryAction` are rendered twice, in the header bar and inside the drawer.
A slotted element exists at exactly one position in the DOM, so only one of the two could ever be
filled, and which one was up to the compiler. The drawer slots are now named separately for the web
component output: `metaNavigation` and `secondaryAction` keep filling the header bar, and the drawer
positions can be filled via `mobileMetaNavigation` and `mobileSecondaryAction` — which previously
was not possible at all.
