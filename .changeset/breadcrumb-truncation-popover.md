---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

refactor(DBBreadcrumbTruncationItem): use DBButton and DBPopover for hover reveal

Replaces the native `details`/`summary` disclosure with a ghost `DBButton`
trigger inside a `DBPopover`, so the hidden breadcrumb items now reveal on
hover and focus instead of on click. Placement, outside-close, and viewport
repositioning are handled by `DBPopover`.
