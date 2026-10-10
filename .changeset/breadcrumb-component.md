---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBBreadcrumb): add breadcrumb (`DBBreadcrumb`, `DBBreadcrumbItem` and `DBBreadcrumbPopoverItem`) components with truncation

Supports composition (slotted items) and options API (`items`), `size` and `separator` variants, disabled and icon-only (`noText`) items, automatic collapsing, and manual truncation via `DBBreadcrumbPopoverItem` which reveals the hidden items in a popover. Also refactors `DBAccordion` to reuse the shared `parseItems` utility.
