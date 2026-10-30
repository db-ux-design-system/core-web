---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat(layout): make the tablet and desktop breakpoints customizable

- two new inheriting custom properties, `--db-tablet-breakpoint` (default `48em`/768px) and `--db-desktop-breakpoint` (default `64em`/1024px), override the layout switch point at any scope
- non-deprecated components now switch via a container style query against these instead of a fixed media query: `DBShell`, `DBControlPanelDesktop/Mobile/FlatIcon` and `DBControlPanelNavigation` use `--db-desktop-breakpoint`; `DBBreadcrumb`, `DBPagination`, `DBFooterMeta`, `DBCustomSelect`, `DBPopover` and `DBTooltip` use the breakpoint matching their existing behavior
- the `DBShell`/`DBControlPanel` default switch is now `md` (1024px), aligned with `DBHeader` (was `sm`/768px); set `--db-desktop-breakpoint: 48em` to restore it
- `2000px` keeps the mobile layout on any realistic viewport ("force mobile"); `400px` keeps it desktop
- the deprecated `DBPage`, `DBHeader`, `DBNavigation` and `DBNavigationItem` keep the old media-query mechanism (and `forceMobile`) unchanged
- styling-only, no rendered HTML changed, but CSS-only consumers pinned to the 768px switch should review the new default
