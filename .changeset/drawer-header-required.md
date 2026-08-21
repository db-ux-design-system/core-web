---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat: `DBDrawer` now supports a `DBDrawerHeader` in the `header` slot for accessible close button and dialog labeling

- New `DBDrawerHeader` component provides the close button and sets `aria-labelledby` on the dialog when `text` prop is used
- The `width` property has been renamed to `containerSize`
