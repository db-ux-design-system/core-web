## HTML

> **Beta:** Paragraph is available as a beta component. Its API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

`db-paragraph` renders a `p` for block-level body copy. For inline text inside a sentence use a plain `span`, there is no component for it. Spacing between several paragraphs belongs to [`db-text-group`](../text-group/properties).

### Native HTML and CSS class

```html
<p class="db-paragraph">A paragraph of body copy.</p>
<p class="db-paragraph" data-size="sm">
	A smaller paragraph with an <span>inline passage</span>.
</p>
```

### Web Components

```html
<db-paragraph>A paragraph of body copy.</db-paragraph>
<db-paragraph size="sm"> A smaller paragraph. </db-paragraph>
```

### Size

`size` accepts `lg`, `md` and `sm`, and it has **no default**: leaving it out inherits the size from the surrounding typography.

In a default context that is the same as `md`, because the foundations set the root to the medium step - an unset paragraph measures 16px with a 24px line height, exactly like `data-size="md"`. The difference only shows inside a container that changed the type scale, where an unset paragraph follows it and a fixed `md` would not. Density tokens provide responsive typography, so there is no breakpoint-specific size property.

### Font weight

There is no font-weight property. Emphasis is semantic and belongs to the element, so use `strong` inside the paragraph. That works at any size, because the weight sits on the `strong` rather than on the paragraph:

```html
<p class="db-paragraph">
	A paragraph with an <strong>emphasised passage</strong>.
</p>
```

For a presentational weight on the whole paragraph the foundations' global `data-font` annotation covers `digital` (300), `regular` (400), `medium` (500), `semibold` (600) and `bold` (700). It is forwarded like any other `data-*` attribute, but it only takes effect while `data-size` is unset: a set size applies the `font` shorthand at a higher specificity and resets the weight. Measured, `data-font="bold"` alone computes to 700, and combined with `data-size="sm"` it falls back to 400.

### Spacing and alignment

`db-paragraph` renders a `p`, so block spacing comes from the foundations' `data-text-spacing` opt-in: with the attribute on the element or any ancestor it gets `0.5lh` above and below, without it anywhere above it renders flush, and `data-text-spacing="false"` switches it back off. A surrounding [`db-text-group`](../text-group/properties) sets that attribute for a whole block.

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
