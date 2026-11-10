---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBTextarea): add `--db-textarea-min-block-size` styling API

- Set the `--db-textarea-min-block-size` CSS Custom Property on a `.db-textarea` to give its textarea a minimum height, e.g. so a `fieldSizing="content"` textarea reserves room for a number of lines (`4lh`) even when empty or manually shrunk.
- Accepts any length; defaults to `auto` (no minimum), so the textarea is unchanged when the property is not set.
