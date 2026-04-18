---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

Add Invoker Commands (`command` and `commandfor` HTML attributes) to dialog-based components (Drawer and Header). The close button in the Drawer component now includes `command="close"` and `commandfor` attributes, and the burger menu button in the Header includes `command="show-modal"` and `commandfor` attributes, declaratively connecting buttons with `<dialog>` elements. Feature detection prevents the built-in browser behavior to preserve animation and state management through JavaScript. The `command` and `commandfor` props are also available on DBButton for custom usage.
