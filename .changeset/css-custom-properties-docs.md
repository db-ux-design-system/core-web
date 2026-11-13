---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

docs: document the CSS custom properties of the components

- The styling API (CSS custom properties consumers may set) is now registered with `@property` and documented for DBInput, DBSelect, DBCustomSelect, DBTextarea, DBCard, DBPopover, DBTooltip, DBDialog, DBDrawer, DBTable, DBLoadingIndicator, DBCustomSelectDropdown, DBControlPanelBrand, DBControlPanelDesktop and DBShellSubNavigation. Registering changes nothing at runtime: the properties have no `initial-value`, so the existing fallbacks still apply.
- The build writes the documented properties of a component to `build/components/<name>/<name>.css-properties.json`, shown as "CSS custom properties" on the overview pages in Storybook.
