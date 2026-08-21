---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat: introduce control-panel shell architecture (deprecates DBPage, DBHeader, DBBrand, DBNavigation, DBNavigationItem)

- New `DBShell` component (deprecates `DBPage`)
- New `DBControlPanelDesktop` and `DBControlPanelMobile` (deprecates `DBHeader`)
- New `DBControlPanelBrand` (deprecates `DBBrand`)
- New `DBControlPanelNavigation` (deprecates `DBNavigation`)
- New `DBControlPanelNavigationItem` (deprecates `DBNavigationItem`)
- New `DBControlPanelNavigationItemGroup` for sub-navigation
- New `DBShellContent` component for main content area
- New `DBShellSubNavigation` for secondary navigation panels
- New `DBControlPanelMeta`, `DBControlPanelPrimaryActions`, `DBControlPanelSecondaryActions` slot components
- New `DBControlPanelFlatIcon` for collapsed icon-only navigation
