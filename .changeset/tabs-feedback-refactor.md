---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

Refactor DBTabs and DBTabItem.

- **Breaking:** DBTabItem now renders a native `button` (`role="tab"`) instead of a radio `input`. The active state is managed by the parent DBTabs.
- **Breaking:** Removed `checked`, `noText` and `name` from DBTabItem. Use icon-only tabs with `label` for accessibility; active state and naming are handled internally by DBTabs.
- **Breaking:** Renamed DBTabs props `onTabSelect` → `onIndexChange`, `alignment` → `tabItemAlignment` and `width` → `tabItemWidth`.
- **Breaking:** Deep linking via URL hash now derives the tab id from the `id` prop instead of `label`. Set an explicit `id` on DBTabs for deep links (e.g. `#my-tabs-tab-1`).
- Added an automatic truncation tooltip that shows a DBTooltip for overflowing tab labels.
- Fixed vertical tab layout, trailing icon positioning and tooltip placement.
