---
"@db-ux/core-foundations": patch
---

fix(icons): only generate the icon-font sizes that are actually used

- the icon-font build now passes the new `sizes` option of `@db-ux/icon-font-tools`, so it only generates the six weights that `scss/icons/relative.scss` loads (16, 20, 24, 32, 48, 64) plus the base `default` / `filled` folder
- the unused `all` output folder and the never-referenced `_12`, `_14` and `_28` folders (both variants) are no longer generated or shipped, shrinking the published `@db-ux/core-foundations` assets
- no consumer-facing output change: every `@font-face` and `data-icon-weight` rule and every font folder a consumer actually loads is unchanged; weights like 28, 40, 80, 96 and 120 keep rounding to the nearest generated weight at runtime as before
