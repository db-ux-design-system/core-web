---
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBTextarea): add `minRows` and `minCols` properties

- `minRows` / `minCols` set a minimum size via `min-block-size` / `min-inline-size`, which (unlike the native `rows` / `cols` attributes) keeps constraining a `fieldSizing="content"` textarea.
- The `--db-form-component-min-block-size` / `--db-form-component-min-inline-size` CSS Custom Properties override the floor with an explicit length and also work on their own when `minRows` / `minCols` are not set.
