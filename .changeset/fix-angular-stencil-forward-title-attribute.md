---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix: forward native `title` attribute to the component element in the Angular and Web Component outputs

The runtime attribute-passing only forwarded `data-*`, `aria-*`, `class` and `style` from the custom-element host to the inner element. The native `title` attribute was dropped, so `<db-heading-h-6 title="...">` (and any other component) never reached the rendered element. React already forwards `title`, so this aligns the Angular and Web Component outputs with the React behavior.
