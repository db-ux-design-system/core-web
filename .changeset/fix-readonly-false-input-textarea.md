---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix: remove `readonly` attribute on `DBInput` and `DBTextarea` when `readOnly`/`readonly` is `false`

Passing `readOnly={false}` (e.g. via Angular's `formField` directive) previously rendered `readonly="false"` into the DOM. Since `readonly` is a boolean HTML attribute, its mere presence made the field read-only. The binding now resolves to `undefined` when not read-only, so the attribute is omitted entirely.
