---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/v-core-components": patch
"@db-ux/wc-core-components": patch
---

fix(custom-select): keyboard navigation for option groups in single-select mode:

- Fixes a keyboard accessibility issue where users could not navigate to options in subsequent option groups using arrow keys in single-select mode.
- Now, all options are accessible via keyboard regardless of group boundaries.
