---
"@db-ux/core-components": minor
---

feat(DBTextarea): render `data-min-rows` / `data-min-cols` on the textarea

- The `<textarea>` now carries `data-min-rows` / `data-min-cols` which the styles consume to apply calculated `min-block-size` / `min-inline-size` CSS declarations.
- You can set the minimum to an explicit length instead via the `--db-form-component-min-block-size` / `--db-form-component-min-inline-size` custom properties, which also works when `minRows` / `minCols` are omitted.
