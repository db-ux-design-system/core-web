---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

Add null guard in `floating-components.ts` to prevent errors when `element` or `parent` is `null` inside tests.
