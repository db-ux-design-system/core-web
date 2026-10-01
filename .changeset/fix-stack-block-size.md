---
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

feat(DBStack): add `width` and `height` properties and remove default `block-size: 100%`

BREAKING CHANGE: `DBStack` no longer forces `block-size: 100%`. The default height is now `auto`, so a stack shrinks around its children instead of stretching to a definite-height parent. Add `height="full"` to any stack that relied on the previous full-height behavior (e.g. column `justifyContent`/`alignment` layouts). See the v5 ➡ v6 migration guide.
