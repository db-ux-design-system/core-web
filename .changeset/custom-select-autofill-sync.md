---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBCustomSelect): synchronize values autofilled into the native select

Browser autofill and password managers write to the hidden backing `<select>` that carries the advertised `autocomplete`. Its `change` handler previously only stopped propagation, so the visible summary, the option states and `onOptionSelected` stayed stale while the submitted form value had already changed - and the next validation run silently overwrote the autofilled value again. The handler now mirrors the native selection back into the component state.
