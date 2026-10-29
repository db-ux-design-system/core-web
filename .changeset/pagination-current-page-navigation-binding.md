---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBPagination): prevent current-page navigation without throwing on click

- A click inside `db-pagination` no longer throws `TypeError: this.isModifiedLinkClick is not a function` in the Web Component output - the capture-phase listener that lost its binding was removed, and the current-page `preventDefault` now lives in the single delegated `handleClick` on the `<ul>`.
- Default navigation is still suppressed only for a real link (`a[href]`) on the current page, so a composed anchor does not follow its href while a `<button>` keeps its no-op click.
