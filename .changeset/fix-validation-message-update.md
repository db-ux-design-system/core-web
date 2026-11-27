---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBSelect, DBInput, DBTextarea, DBCheckbox, DBSwitch, DBCustomSelect): re-read the browser `validationMessage` fallback when `required`, `disabled`, the value or a constraint like `min`/`max`/`pattern` changes at runtime, so a stale message is no longer shown
