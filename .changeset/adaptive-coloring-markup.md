---
"@db-ux/core-components": minor
---

feat(components): adaptive coloring markup changes for CSS-only consumers

- every component root now carries `data-material` and `data-adaptive-color` attributes (empty unless the new `material` / `color` props are set); alt-state-aware components additionally carry `data-alt-state-material` / `data-alt-state-adaptive-color`
- legacy variant colors were extracted from each component's base CSS into a sibling `<name>.legacy-coloring.css`; the full `bundle.css` still includes them, but selective per-component imports must now also import `<name>.legacy-coloring.css` to keep variant colors
- `DBTabs` / `DBControlPanelNavigation` scroll buttons: `tabs-scroll-start` / `tabs-scroll-end` are replaced by `overflow-scroll-left-button` / `overflow-scroll-right-button`, each wrapped in a new `overflow-scroll-left-button-container` / `overflow-scroll-right-button-container` div
- `DBAccordionItem`: the `<summary>` element now carries a `db-accordion-item-header` class
