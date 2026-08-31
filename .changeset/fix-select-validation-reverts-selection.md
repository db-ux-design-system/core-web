---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBSelect): keep the user's selection when validation runs on `input`

A browser dispatches `input` and `change` for a `select` in separate tasks. `DBSelect` validated synchronously on `input`, which changed internal state and triggered a re-render while the controlled `value` was still the previous one. Because React re-applies the `value` on every commit of a `select`, that re-render discarded the selection before `change` was dispatched — so controlled `required` selects never received the new value. Validation now runs once the value has been propagated.
