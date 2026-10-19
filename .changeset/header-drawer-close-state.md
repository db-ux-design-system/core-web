---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/v-core-components": patch
"@db-ux/wc-core-components": patch
---

fix(DBHeader): always report the closed state when the drawer closes

The drawer's close event was routed through the toggle handler, which derives
its value by inverting `drawerOpen`. When the drawer was closed via the state
(a navigation item click, or a consumer calling `setDrawerOpen(false)`), the
dialog closed only after `drawerOpen` was already `false`, so the inverted
value reported "open" and reopened the drawer immediately. `onToggle` now
always receives `false` on close.
