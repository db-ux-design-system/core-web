---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(DBCustomSelect): stop tag removal from crashing the Web Component

- Removing a selected tag (or clearing all) in a `multiple` + `selected-type="tag"` custom select no longer throws `TypeError: Cannot read properties of null (reading 'nodeType')` / `elm.remove is not a function` in the `@db-ux/wc-core-components` output.
- Root cause: each selected tag rendered as a `<db-tag>` custom element, a scoped-slot host; removing one from the shrinking tag list crashed Stencil's scoped-slot relocation in `removeVnodes`. The selected tags now render as the CSS-only `db-tag` markup directly, so there is no nested slot host to relocate.
- Markup change: a selected tag is now `<div class="db-tag" data-emphasis="strong">` containing the label and a `<button class="db-button db-tab-remove-button">` (previously a `<db-tag>` custom element). The remove button keeps its accessible name via the nested label tooltip, unchanged for consumers who style `.db-tag` / `.db-tab-remove-button`.
