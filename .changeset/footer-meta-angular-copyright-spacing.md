---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBFooterMeta): remove double space before the copyright holder in Angular

The copyright sign and its non-breaking space were a text node next to the
`copyright` interpolation. For Angular that generated
`©&nbsp; {{copyright()}}`, and Angular does not collapse whitespace next to a
`&nbsp;`, so the Angular output rendered the line about 3px wider than React and
Vue. Sign and space are now part of the interpolated expression, so every target
renders the same text.
