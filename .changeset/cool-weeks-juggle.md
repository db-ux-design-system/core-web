---
"@db-ux/core-components": patch
---

fix: prevent Sass from emitting `@charset` in published SCSS output

Replaces the literal `"\2022"` escape in `switch.scss` with `string.unquote`, which emits the CSS escape sequence verbatim without Sass resolving it to a non-ASCII character. This prevents `@charset "UTF-8"` from appearing when consumers compile the published SCSS sources, avoiding BOM-corrupted selectors in concatenated CSS (e.g. Next.js + cssnano + PostCSS 8.5.24+).
Also removes non-ASCII characters (em-dashes, umlauts) from SCSS comments in published files, as these equally trigger `@charset` emission during consumer compilation.
