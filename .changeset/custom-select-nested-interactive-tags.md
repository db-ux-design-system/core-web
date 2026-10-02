---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBCustomSelect): remove nested-interactive violation for removable tags

The removable tags in `selectedType="tag"` mode no longer render inside the interactive `<summary>`, resolving the `nested-interactive` accessibility violation (WCAG 4.1.2). The public API (props, events, custom-element tags) is unchanged — only the rendered HTML structure moved, so CSS-only consumers who copied the markup should update it:

- the field box is now a wrapping `<div class="db-custom-select-form-field">` around the `<details>` (previously the `<summary>` carried that class)
- the toggle is an empty `<summary class="db-custom-select-summary">`, with the selection rendered beside it instead of inside it
- selected labels now render in `<span class="db-custom-select-label">`
- tags now render in `<div class="db-custom-select-tags">`
- the clear button is now `<button class="db-custom-select-clear">` as a flex item inside the field (previously positioned over it)
