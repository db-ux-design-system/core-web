---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

fix(foundations): resolve assets in `relative.css` from the package root

The default asset path in `theme/relative.css`, `fonts/relative.css` and `icons/relative.css` changes from `../../assets/` to `../../../assets/`. The CSS now finds fonts and icon fonts directly in the package, e.g. when loaded from a CDN.

**Action required** if you copy `build/styles/` and `assets/` side by side into your `public` folder: keep the package structure (`build/styles/` next to `assets/`) or override `$icons-path`, `$fonts-path` and `$images-path`.
