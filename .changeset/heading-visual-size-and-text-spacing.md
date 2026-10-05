---
"@db-ux/core-foundations": major
"@db-ux/core-components": major
"@db-ux/ngx-core-components": major
"@db-ux/react-core-components": major
"@db-ux/wc-core-components": major
"@db-ux/v-core-components": major
---

refactor(DBHeading): strip block spacing by default, remove `alignment` and `paragraphSpacing`, rename `size` to `visualSize`

Block-level text elements (`h1`-`h6`, `p`) no longer carry a `margin-block` by default. Set `data-text-spacing="true"` on an ancestor to add the spacing (now a constant `1lh / 2`) back. The Heading `paragraphSpacing` and `alignment` properties were removed, and `size` was renamed to `visualSize`.
