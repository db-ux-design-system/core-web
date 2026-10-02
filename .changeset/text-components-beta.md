---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBText): add beta Text, Paragraph and ParagraphGroup components

`DBText` renders a `span` for inline text and takes `visuallyHidden`, `DBParagraph` renders a `p` for body copy, and `DBParagraphGroup` renders a `div` that spaces its paragraphs with a shared `gap`. `size` spans `3xl` to `3xs` on all three and has no default, so omitting it inherits from the surrounding typography and a size on the group cascades to its paragraphs.
