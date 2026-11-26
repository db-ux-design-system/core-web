---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBAccordion, DBAccordionItem): keep the open state of `DBAccordionItem` in sync with the native details element

- `behavior="single"` and `initOpenIndex` no longer require a second click to open or close an item, the item now follows the native `toggle` event of its `details`
- `onToggle` of `DBAccordionItem` is now also called when the browser changes the open state: when a sibling of the exclusive group opens, and once on load for items opened by `initOpenIndex`
- a controlled `DBAccordionItem` (`open` property) has to follow `onToggle`, because the browser can close it natively
- the exclusive `name` is only set on the `details` of the accordion items, a nested `DBCustomSelect` no longer closes its parent item
- `initOpenIndex` only counts the `details` of the accordion items, which have to be direct children of `li.db-accordion-item`
