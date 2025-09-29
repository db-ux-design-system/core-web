---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
"@db-ux/core-components": patch
"@db-ux/core-foundations": patch
---

Fixes an issue where DBCustomSelect tags remained visible after
form resets by external validation libraries (e.g., VeeValidate).
The values watcher in custom-select.lite.tsx now properly clears
internal state when values are set to empty, null, or undefined, ensuring tags are hidden as expected.
