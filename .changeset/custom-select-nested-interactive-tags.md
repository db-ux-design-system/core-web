---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBCustomSelect): remove nested-interactive violation for removable tags

The removable tags in `selectedType="tag"` mode no longer render inside the
interactive `<summary>`, resolving the `nested-interactive` accessibility
violation (WCAG 4.1.2). The field box moved onto a wrapping
`.db-custom-select-form-field` element, the `<details>`/`<summary>` became an
absolutely positioned toggle behind the visible selection, and the chevron and
clear button are now flex items inside the field.

The public API (props, events, custom-element tags) is unchanged — only the
rendered HTML structure moved. Consumers who copied the markup or styled the
internal structure should update to match the table below.

Changed HTML elements:

| Before                                          | After                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------- |
| `<summary class="db-custom-select-form-field">` | `<div class="db-custom-select-form-field">` wrapping `<details>`                 |
| selection + tags inside `<summary>`             | `<summary class="db-custom-select-summary">` (empty toggle), selection beside it |
| selected labels `<span>`                        | `<span class="db-custom-select-label">`                                          |
| tags `<div>`                                    | `<div class="db-custom-select-tags">`                                            |
| clear button (positioned over the field)        | `<button class="db-custom-select-clear">` as a flex item in the field            |
