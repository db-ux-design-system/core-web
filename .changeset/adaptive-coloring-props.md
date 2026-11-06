---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(components): add adaptive `material` and `color` props to every component

- every component now accepts the shared `material` and `color` props to opt into the adaptive color system, bound as `data-material` / `data-adaptive-color` on its root element
- `DBCustomButton`, `DBTag` and the other alt-state-aware components add `altStateMaterial` and `altStateColor` props, bound as `data-alt-state-material` / `data-alt-state-adaptive-color`
- `DBButton` / `DBCustomButton` gain a new `adaptive` value for the `variant` prop
- all additions are backward compatible: existing markup renders unchanged when the new props are omitted
