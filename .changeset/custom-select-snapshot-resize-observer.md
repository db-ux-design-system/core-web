---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBCustomSelect): skip the document resize observer while snapshot testing

- Under `data-test` (snapshot testing force-opens dropdowns), the dropdown no longer registers the `document.documentElement` ResizeObserver whose repositioning could resize the document and refire the observer in a loop; the one-time placement still runs, so the rendered DOM is unchanged.
