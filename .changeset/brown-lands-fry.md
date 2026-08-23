---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix: multiple issues for DBPopover

- DBPopover hides when moving mouse too slow
- DBPopover changes aria-expanded independently of open state
- DBPopover - wrong content position on programatic "open" prop
