---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBTable): add `text` property to DBTableDataCell and DBTableHeaderCell, update cell padding and selected interactive row styling

- `DBTableDataCell` and `DBTableHeaderCell` gain an optional `text` property as an alternative to the default slot/children, matching the shared `TextProps` used by other components.
- Markup change: the `<td class="db-table-data-cell">` and `<th class="db-table-header-cell">` render `props.text` when it is set and fall back to their children otherwise, so the two are never rendered together.
- `DBTableRow` now forwards the `text` property of its `cells` entries to the rendered `DBTableDataCell` / `DBTableHeaderCell`, so the data-driven API renders `text` instead of silently ignoring it.
- Table cell padding now uses a smaller block value than inline for every size (block is one spacing step below inline): medium (default) `fixed-2xs`/`fixed-xs`, large `fixed-xs`/`fixed-sm`, small and x-small `fixed-3xs`/`fixed-2xs`.
- A selected interactive row now uses the `level-3` background tokens (default/hovered/pressed) instead of `level-2`, while keeping the informational color context.
- A selected interactive row now pins its divider `border-color` (row and cells) to the fixed neutral token (`neutral-on-bg-basic-emphasis-60`) so the border stays neutral instead of following the informational color context.
