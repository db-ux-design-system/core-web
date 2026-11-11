---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBAccordion): restore legacy card border color

- the `card` variant's component border lost its color when the legacy colors were split into `accordion.legacy-coloring.scss`: the base `&::after` only carries the structure-only `%component-border` (width + style), so without a color companion the border fell back to `currentColor`
- the legacy layer now extends `%component-border-colors` on the card item's `&::after`, restoring the `emphasis-60` border color
