## Vue

> **Beta:** Paragraph is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

`DBParagraph` renders a `p` for block-level body copy. For inline text inside a sentence use a plain `span`, there is no component for it. Spacing between several paragraphs belongs to [`DBTextGroup`](../text-group/properties).

```vue
<script setup lang="ts">
import { DBParagraph } from "@db-ux/v-core-components";
</script>

<template>
	<DBParagraph>A paragraph of body copy.</DBParagraph>
	<DBParagraph size="sm">
		A smaller paragraph with an <span>inline passage</span>.
	</DBParagraph>
</template>
```

### Size

`size` accepts `lg`, `md` and `sm` and has **no default**: omitting it inherits the size from the surrounding typography.

In a default context that is the same as `md`, because the foundations set the root to the medium step - an unset paragraph measures 16px with a 24px line height, exactly like `size="md"`. The difference only shows inside a container that changed the type scale, where an unset paragraph follows it and a fixed `md` would not. Density tokens provide responsive typography, so there is no breakpoint-specific size prop.

### Font weight

There is no font-weight property. Emphasis is semantic and belongs to the element, so use `strong` inside the paragraph. That works at any size, because the weight sits on the `strong` rather than on the paragraph:

```vue
<DBParagraph>
	A paragraph with an <strong>emphasised passage</strong>.
</DBParagraph>
```

For a presentational weight on the whole paragraph the foundations' global `data-font` annotation covers `digital` (300), `regular` (400), `medium` (500), `semibold` (600) and `bold` (700). It is forwarded like any other `data-*` attribute, but it only takes effect while `size` is unset: a set size applies the `font` shorthand at a higher specificity and resets the weight. Measured, `data-font="bold"` alone computes to 700, and combined with `size="sm"` it falls back to 400.

### Spacing and alignment

`DBParagraph` renders a `p`, so block spacing comes from the foundations' `data-text-spacing` opt-in: with the attribute on the element or any ancestor it gets `0.5lh` above and below, without it anywhere above it renders flush, and `data-text-spacing="false"` switches it back off. A surrounding [`DBTextGroup`](../text-group/properties) sets that attribute for a whole block.

There is deliberately no `text-align`, which is what lets the `alignment` of a `DBTextGroup` reach the paragraph by inheritance.

### Content, attributes and accessibility

Content always comes through the default slot, there is no `text` prop.

`DBParagraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`. Use a `span` there.

Body copy gets `text-wrap: pretty`, the counterpart to `text-wrap: balance` on headings. It is a progressive enhancement: browsers without support compute `wrap`.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `class` and `id` attributes are forwarded to the rendered element. That also covers the global `data-visually-hidden` annotation, which needs no prop of its own and requires the `visually-hidden` stylesheet:

```vue
<DBParagraph data-visually-hidden="true">
	Only announced by assistive technology.
</DBParagraph>
```
