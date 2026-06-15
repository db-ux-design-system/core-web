---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(custom-select): dropdown with `dropdownWidth="auto"` now correctly sizes to content width and respects the trigger minimum width. Long option labels no longer get truncated: `auto` keeps them on a single line (dropdown grows to the longest option), while `fixed` and `full` wrap long labels onto new lines.
