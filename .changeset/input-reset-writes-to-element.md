---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBInput): restore the value on a native form reset in Angular

A native form reset is a programmatic write, so it now goes through `writeValue`
again and reaches the element, instead of only updating the model signal (which
stayed unchanged when the reset value matched the last typed value, leaving the
field empty). Applies to `DBInput`, `DBTextarea` and `DBSelect`.
