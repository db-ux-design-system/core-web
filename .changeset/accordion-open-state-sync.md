---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBAccordion): keep the open state of `DBAccordionItem` in sync with the native details element

- `behavior="single"` and `initOpenIndex` no longer require a second click to open or close an item, the item now follows the native `toggle` event of its `details`
- the exclusive `name` is only set on the `details` of the accordion items, a nested `DBCustomSelect` no longer closes its parent item
- `initOpenIndex` only counts the `details` of the accordion items
