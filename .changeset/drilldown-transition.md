---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBControlPanel): open drilldown with a transition instead of a clip-path

- open the navigation drilldown with a transition instead of a `clip-path`
- pin the drilldown overlay to the scroll viewport so it is not shifted up by an existing scroll offset
- restore the flat-icon navigation indicator and the drilldown group icons
- recompute the navigation variant on viewport resize so it no longer sticks to popover after switching from drilldown
- reduce the navigation item and expand button gap to fix wrong icon spacing
