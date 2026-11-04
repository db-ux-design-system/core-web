---
"@db-ux/core-components": minor
---

feat(DBTextarea): render `data-min-rows` / `data-min-cols` on the textarea

- The `<textarea>` now carries `data-min-rows` / `data-min-cols` which the styles consume to apply calculated `min-block-size` / `min-inline-size` CSS declarations.
- And you could set the minimum values directly via the `--db-textarea-min-block-size` / `--db-textarea-min-inline-size` custom properties on the `.db-textarea` wrapper as well.
