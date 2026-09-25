---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

docs(DBIcon): document that the icon is always decorative

The usage examples showed `<DBIcon icon="x_placeholder">Icon</DBIcon>`, which suggests the child text is rendered somewhere. It is not: the component renders `aria-hidden="true"` and `font-size: 0`, so `text` and children are hidden both visually and from the accessibility tree, and `role` / `aria-label` on the component have no effect either. The examples now show the icon without content, and a new accessibility page explains how to label an informative icon (named wrapper, the parent component's `icon` property, or the `data-icon` attribute).
