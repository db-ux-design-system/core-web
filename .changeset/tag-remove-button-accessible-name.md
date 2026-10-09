---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTag): add accessible text to the removable tag button

The removable tag button only rendered a `DBTooltip` with the remove label and had no text content of its own, leaving the button without an accessible name. This surfaced on the tags in `DBCustomSelect`. The remove label is now also rendered as the button's text content so the button has a reliable accessible name.
