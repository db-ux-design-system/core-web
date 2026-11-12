---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBTableRow): align legacy checked-row coloring with the adaptive design

- a checked interactive row now uses the level-3 surface (default/hover/pressed) instead of level-2, matching the design that landed on `main`
- its divider border is pinned to the neutral `emphasis-60` color so it no longer follows the informational color context the checked row applies
- the plain (non-checked) interactive row keeps its level-2 hover/pressed states
