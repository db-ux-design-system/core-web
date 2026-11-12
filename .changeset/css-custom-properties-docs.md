---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat: document the CSS custom properties of the components

- The styling API (CSS custom properties consumers may set) is now registered with `@property` and documented for DBInput, DBSelect, DBCustomSelect, DBTextarea, DBCard, DBPopover, DBTooltip, DBDialog, DBDrawer, DBTable, DBLoadingIndicator, DBCustomSelectDropdown, DBControlPanelBrand, DBControlPanelDesktop and DBShellSubNavigation. Registering changes nothing at runtime: an `initial-value` is only set where it equals the existing fallback.
- The build writes the documented properties of a component to `build/components/<name>/<name>.css-properties.json`, shown as "CSS custom properties" on the overview pages in Storybook.
