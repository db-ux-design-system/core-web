---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/v-core-components": patch
"@db-ux/wc-core-components": patch
---

fix(DBCustomSelect): automatically handle form reset events

An event listener is now added for every form component (input, custom-select, etc.) when a `form` property is passed.
This listener detects form resets and updates the component's internal value/checked state accordingly.

> **Note**: This does not work for `ngModel` in Angular.
