---
"@db-ux/ngx-core-components": patch
"@db-ux/wc-core-components": patch
---

fix(attribute passing): remove forwarded `data-*`, `aria-*`, `role`, `title` and `style` attributes from the inner element when a binding removes them from the host (e.g. `[attr.aria-label]="null"`)
