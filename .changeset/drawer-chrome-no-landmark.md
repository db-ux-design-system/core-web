---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): keep drawer chrome out of page landmarks

`DBDrawerHeader` and `DBDrawerFooter` now render their heading and action wrappers as
neutral `<div>` elements instead of `<header>` / `<footer>`, so they no longer expose an
extra `banner` / `contentinfo` landmark that let screen-reader landmark navigation enter
the drawer chrome. The nested `<h2>` still provides the heading and the `aria-labelledby`
relationship; only the surplus landmark roles are removed.
