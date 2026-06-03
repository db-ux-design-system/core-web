---
"@db-ux/ngx-core-components": patch
---

fix(): Fix Angular showcase dev server crashing with NG0203 by disabling Vite prebundling, which caused duplicate `@angular/core` instances.
