---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat: document the CSS custom properties of the components

- The styling API of DBInput, DBSelect, DBCustomSelect and DBTextarea (`--db-form-component-min-inline-size`) is now registered with `@property` and documented. Registering changes nothing at runtime: the property has no initial value, so the existing defaults still apply.
- The build writes the documented properties of a component to `build/components/<name>/<name>.css-properties.json`, shown as "CSS custom properties" on the overview pages in Storybook.
