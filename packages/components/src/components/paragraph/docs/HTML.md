## HTML

> **Beta:** Paragraph is available as a beta component. Its API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

`db-paragraph` renders a `p` for block-level body copy. For inline text inside a sentence use a plain `span`, there is no component for it. Spacing between several paragraphs belongs to [`db-text-group`](../text-group/properties).

### Native HTML and CSS class

```html
<p class="db-paragraph">A paragraph of body copy.</p>
<p class="db-paragraph" data-size="sm" data-font-weight="black">
	A smaller, bolder paragraph with an <span>inline passage</span>.
</p>
```

### Web Components

```html
<db-paragraph>A paragraph of body copy.</db-paragraph>
<db-paragraph size="sm" font-weight="black">
	A smaller, bolder paragraph.
</db-paragraph>
```

### Size and font weight

`size` accepts `lg`, `md` and `sm`, and it has **no default**. Leaving it out inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size property.

`font-weight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default.

Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing and alignment

`db-paragraph` renders a `p`, so block spacing comes from the foundations' `data-text-spacing` opt-in: without it the paragraph renders flush, with it on the element or any ancestor it gets `0.5lh` above and below. A surrounding [`db-text-group`](../text-group/properties) sets that attribute for a whole block.

There is deliberately no `text-align`, which is what lets the `alignment` of a `db-text-group` reach the paragraph by inheritance.

### Content and accessibility

Content always comes through children, there is no `text` property.

`db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`, which accept phrasing content only. Use a `span` there.

Body copy gets `text-wrap: pretty`, the counterpart to `text-wrap: balance` on headings. It is a progressive enhancement: browsers without support compute `wrap`.

All `data-*` and `aria-*` attributes are forwarded to the rendered element, so no typed property is needed for them. That also covers the global `data-visually-hidden` annotation, which removes an element from view while keeping it available to assistive technology and requires the `visually-hidden` stylesheet:

```html
<db-paragraph data-visually-hidden="true">
	Only announced by assistive technology.
</db-paragraph>
```

`id` is a component property and is rendered on the element.
