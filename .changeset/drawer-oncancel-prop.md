---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): expose the `onCancel` prop

`DBDrawer` forwarded the native `cancel` event internally but never declared `onCancel`
in its props type, so a consumer's `onCancel` handler could not be typed or wired. The
prop is now part of `DBDrawerProps` (matching `DBDialog`), so consumers can veto a native
close (e.g. Escape or `command="request-close"`) via `event.preventDefault()`.
