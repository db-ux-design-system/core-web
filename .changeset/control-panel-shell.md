---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor: multiple components with breaking changes

- `DBPage` becomes `DBShell`
- `DBHeader` becomes `DBControlPanelDesktop` and `DBControlPanelMobile`
- `DBBrand` becomes `DBControlPanelBrand`
- `subNavigation` slot of `NavigationItem` is removed, use `NavigationItemGroup` instead
- `DBControlPanelFlatIconNavigation` becomes `DBControlPanelFlatIcon`
- `metaNavigation` slot/prop of `DBControlPanelDesktop` and `DBControlPanelMobile` is renamed to `meta`
