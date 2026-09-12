---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBDrawer): expose the `onCancel` prop

`DBDrawer` forwarded the native `cancel` event internally but never declared `onCancel`
in its props type, so a consumer's `onCancel` handler could not be typed or wired. The
prop is now part of `DBDrawerProps` (matching `DBDialog`), so consumers can veto a native
close (e.g. Escape or `command="request-close"`) via `event.preventDefault()`.
