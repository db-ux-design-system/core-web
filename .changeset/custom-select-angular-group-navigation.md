---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBCustomSelect): skip group titles during keyboard navigation on all frameworks

Option-group keyboard navigation walked `<li>` siblings, which broke on the Angular and Stencil outputs where every list item is wrapped in a `db-custom-select-list-item` custom-element host and therefore has no sibling `<li>`. Navigation now iterates the flat list of option inputs, so arrow keys skip group titles consistently across React, Vue, Angular and Web Components (#4920).
