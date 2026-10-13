---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBParagraph): add beta Paragraph and TextGroup components

`DBParagraph` renders a `p` for body copy and takes `size` (`lg`, `md`, `sm`) and `fontWeight` (`black`, `regular`). Neither has a default, so omitting them inherits from the surrounding typography. Inline text is covered by a plain `span`, there is no component for it.

`DBTextGroup` is a separate component in its own folder. It renders a presentational `div` that groups block-level text and takes `alignment` plus `textSpacing`. `textSpacing` renders the foundations' `data-text-spacing` attribute, which gives every `h1`-`h6` and `p` below it half a line height above and below, so plain markup and components share one rhythm.
