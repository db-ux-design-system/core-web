---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor: rework DBTabs and DBTabItem

- **Breaking:** DBTabItem now renders a native `button` (`role="tab"`) instead of a radio `input`.
- **Breaking:** Removed `checked`, `noText` and `name` from DBTabItem.
- **Breaking:** Renamed DBTabs props `onTabSelect` → `onIndexChange`, `alignment` → `tabItemAlignment`, `width` → `tabItemWidth`.
- **Breaking:** Deep linking derives the tab id from the `id` prop instead of `label`.
- Added truncation tooltip for overflowing tab labels and fixed vertical layout, trailing icon and tooltip placement.
