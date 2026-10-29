---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat(layout): make the tablet and desktop breakpoints customizable

- foundations expose two customizable layout breakpoints as inheriting custom properties: `--db-tablet-breakpoint` (default `48em`/768px) and `--db-desktop-breakpoint` (default `64em`/1024px), each overridable in CSS at any scope (`:root`, a component root, or any ancestor)
- the non-deprecated components that switched layout at a fixed width now switch via a container style query against these properties instead of a hard-coded media query, so the switch point is customizable: `DBShell` / `DBControlPanelDesktop` / `DBControlPanelMobile` / `DBControlPanelFlatIcon` and `DBControlPanelNavigation` use `--db-desktop-breakpoint`; `DBBreadcrumb`, `DBPagination`, `DBFooterMeta`, `DBCustomSelect`, `DBPopover` and `DBTooltip` use the breakpoint matching their existing behavior
- the `DBShell`/`DBControlPanel` default switch is now `md` (1024px), aligned with `DBHeader`; it was previously `sm` (768px) - set `--db-desktop-breakpoint: 48em` to restore the old switch point
- a large value such as `--db-desktop-breakpoint: 2000px` keeps the layout in its mobile form on any realistic viewport (a "force mobile" behavior); a small value such as `400px` keeps it in its desktop form
- the deprecated `DBPage`, `DBHeader`, `DBNavigation` and `DBNavigationItem` are intentionally left on the previous media-query mechanism (including their `forceMobile` support) and are unchanged
- no rendered HTML changed; this is a styling-only change, but the `DBShell`/`DBControlPanel` switch now happens at a different width by default, so CSS-only consumers and anyone who pinned that layout to the 768px switch should review the new default
