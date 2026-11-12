---
"@db-ux/core-foundations": minor
---

feat(foundations): add adaptive-coloring styles and tokens

- new `bundle.adaptive.scss` / `bundle.adaptive.css` and `default-root.adaptive.scss` for the adaptive color system
- new `_variables.adaptive.scss` exposing the adaptive `--db-*` tokens as Sass variables (`$db-bg-default`, `$db-text-default`, `$db-border-default`, the `$db-alt-state-*` variants, etc.)
- `default-required` split into `default-required.base.scss` plus `default-required.scss`
- new adaptive theme token source `theme/theme.tokens.json`, consumed by `@db-ux/core-theme-tools` to generate `build/styles/theme/whitelabel.adaptive.css`
