## React

> **Beta:** Paragraph is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/react-core-components`](https://www.npmjs.com/package/@db-ux/react-core-components).

`DBParagraph` renders a `p` for block-level body copy. For inline text inside a sentence use a plain `span`, there is no component for it. Spacing between several paragraphs belongs to [`DBTextGroup`](../text-group/properties).

```tsx
import { DBParagraph } from "@db-ux/react-core-components";

export const Intro = () => (
	<>
		<DBParagraph>A paragraph of body copy.</DBParagraph>
		<DBParagraph size="sm" fontWeight="black">
			A smaller, bolder paragraph with an <span>inline passage</span>.
		</DBParagraph>
	</>
);
```

### Size and font weight

`size` accepts `lg`, `md` and `sm` and has **no default**. Omitting it inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size property.

`fontWeight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default. Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing and alignment

`DBParagraph` renders a `p`, so block spacing comes from the foundations' `data-text-spacing` opt-in: without it the paragraph renders flush, with it on the element or any ancestor it gets `0.5lh` above and below. A surrounding [`DBTextGroup`](../text-group/properties) sets that attribute for a whole block.

There is deliberately no `text-align`, which is what lets the `alignment` of a `DBTextGroup` reach the paragraph by inheritance.

### Content, attributes and accessibility

Content always comes through children, there is no `text` property.

`DBParagraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`. Use a `span` there.

Body copy gets `text-wrap: pretty`, the counterpart to `text-wrap: balance` on headings. It is a progressive enhancement: browsers without support compute `wrap`.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `className` and `id` attributes are forwarded to the rendered element. That also covers the global `data-visually-hidden` annotation, which needs no property of its own and requires the `visually-hidden` stylesheet:

```tsx
<DBParagraph data-visually-hidden="true">
	Only announced by assistive technology.
</DBParagraph>
```
