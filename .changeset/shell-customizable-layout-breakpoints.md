---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/v-core-components": minor
"@db-ux/wc-core-components": minor
---

feat(layout): make the tablet and desktop breakpoints customizable

- a single inheriting band token, `--db-breakpoint` (`"mobile"` / `"tablet"` / `"desktop"`), drives the layout switch; foundations resolve it from the viewport with two default media queries (tablet from `48em`/768px, desktop from `64em`/1024px) set on `:root` and `:host`
- non-deprecated components now switch via a container style query against `--db-breakpoint` instead of a fixed media query: `DBShell`, `DBControlPanelDesktop/Mobile/FlatIcon` and `DBControlPanelNavigation` switch at desktop; `DBBreadcrumb`, `DBPagination`, `DBFooterMeta`, `DBCustomSelect`, `DBPopover` and `DBTooltip` switch at the breakpoint matching their existing behavior
- a consumer moves a switch point by RE-DECLARING `--db-breakpoint` at any scope - their own `@media` on `:root`, `body` or a wrapper, or via JS - not by a length value; a style query reads an ancestor, so the override just needs to sit on an ancestor of the component
- set `--db-breakpoint: "mobile"` unconditionally to force the mobile layout on any viewport ("force mobile"), or `"desktop"` to force desktop - the force-mobile / force-desktop escape hatch
- the `DBShell`/`DBControlPanel` default switch is now `md` (1024px), aligned with `DBHeader` (was `sm`/768px); to restore the old 768px switch, add a consumer `@media (width >= 48em) { :root { --db-breakpoint: "desktop"; } }`
- the deprecated `DBPage`, `DBHeader`, `DBNavigation` and `DBNavigationItem` keep the old media-query mechanism (and `forceMobile`) unchanged
- styling-only, no rendered HTML changed, but CSS-only consumers pinned to the 768px switch should review the new default
