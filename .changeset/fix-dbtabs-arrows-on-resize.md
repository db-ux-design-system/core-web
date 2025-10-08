---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/v-core-components": patch
"@db-ux/wc-core-components": patch
---

fix(DBTabs): ensure navigation arrows appear correctly on window resize

This update resolves an issue where navigation arrows in DBTabs would not appear or update correctly when the window was resized. The component now properly responds to resize events, ensuring arrows are always shown or hidden as needed.
