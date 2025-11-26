---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix: set DBTabItem internal state `_selected` correctly
- Now also sets aria-selected=true|false correctly which improves screen reader behaviour
