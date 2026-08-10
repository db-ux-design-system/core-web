---
"@db-ux/core-components": patch
---

fix: prevent Sass from emitting `@charset` in published SCSS output for non-ASCII characters, which causes problems e.g. in Next.js
