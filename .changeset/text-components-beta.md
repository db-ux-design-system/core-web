---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBParagraph): add beta Paragraph and TextGroup components

`DBParagraph` renders a `p` for body copy and takes `size` (`lg`, `md`, `sm`) and `fontWeight` (`black`, `regular`). `DBTextGroup` renders a `div` that groups block-level text, takes `alignment` and switches spacing on with `textSpacing`, which gives every child `0.5lh` at block-start and block-end so two adjacent children end up `1lh` apart. Neither `size` nor `fontWeight` has a default, so omitting them inherits from the surrounding typography. Inline text is covered by a plain `span`, there is no component for it.
