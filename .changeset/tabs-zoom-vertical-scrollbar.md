---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTabs): no stray vertical scrollbar in the tab list at fractional browser zoom

A vertical tab list nested inside a horizontal `DBTabs` no longer inherits the horizontal list's overflow and is no longer a scroll container, matching a standalone vertical tab list.
