---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBCustomSelect): skip group titles during keyboard navigation on all frameworks

Option-group keyboard navigation walked `<li>` siblings, which broke on the Angular and Stencil outputs where every list item is wrapped in a `db-custom-select-list-item` custom-element host and therefore has no sibling `<li>`. Navigation now iterates the flat list of option inputs, so arrow keys skip group titles consistently across React, Vue, Angular and Web Components (#4920).

fix(DBDialogHeader): compose dialog aria-labelledby after attribute forwarding

`DBDialogHeader` linked the surrounding dialog to its heading via `aria-labelledby` in `onMount`, which on the Angular and Web Component outputs ran before the attribute-passing observer forwarded a consumer `aria-label` / `aria-labelledby` from the `db-dialog` host onto the inner `<dialog>`. The two writes fell out of sync, so the heading token could be clobbered or a stale token could defeat a consumer `aria-label`. The composition is now deferred with `requestAnimationFrame` so it runs after forwarding has landed.
