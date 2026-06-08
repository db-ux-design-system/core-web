---
"@db-ux/ngx-core-components": patch
"@db-ux/wc-core-components": patch
---

fix: resolve attribute passing issues for custom components by adding a MutationObserver to reactively forward attributes from parent to child in Angular and Stencil targets, and improve handling of style, data-_, and aria-_ attributes
