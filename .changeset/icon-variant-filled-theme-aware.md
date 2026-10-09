---
"@db-ux/core-foundations": patch
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(icons): make `data-icon-variant="filled"` work in themed projects

The generic `default` / `filled` variant names were only emitted in the foundations theme CSS and hard-coded the whitelabel `db-ux-*` font families. Themed projects load `@db-ux/db-theme` instead of the foundations theme CSS, so the selectors never shipped and `data-icon-variant="filled"` silently fell back to the default icon font. The mapping now lives in the always-loaded defaults bundle and resolves through the themeable `--db-icon-<variant>-font-family` custom property.
