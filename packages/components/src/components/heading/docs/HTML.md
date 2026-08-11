## HTML

> **Beta:** `DBHeading` is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration of the CSS, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For the custom element, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

### Native HTML and CSS class

Use the `db-heading` class on a native heading. Choose the element from the document hierarchy, not from its appearance. Omitting `data-size` applies the default mapping: `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```html
<h1 class="db-heading">A level-one heading with the default xl size</h1>
<h6 class="db-heading" data-size="2xl">A level-six heading displayed at 2xl</h6>
```

`data-size` changes only visual size; it never changes the accessible heading level. It accepts `3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`, and `3xs`. Use `data-font-weight="light"` for light weight; black is the default. Use logical `data-alignment="start|center|end"` so start and end adapt to RTL.

`data-paragraph-spacing="true"` adds exactly `1lh` at block-end. Omit it or set it to `false` for no margin. Existing density tokens provide responsive typography, while long headings use `text-wrap: balance` and safe wrapping.

```html
<h2
	class="db-heading"
	data-font-weight="light"
	data-alignment="end"
	data-paragraph-spacing="true"
	data-density="expressive"
>
	Responsive heading
</h2>
```

### Web Component

The Web Component uses required `as` for explicit semantics. Untyped usage defensively falls back to `h1` when `as` is missing or invalid.

```html
<db-heading as="h6" size="2xl" paragraph-spacing>
	<span slot="startSlot" aria-hidden="true">[</span>
	A level-six heading displayed at 2xl
	<span slot="endSlot" aria-hidden="true">]</span>
</db-heading>
```

### Content and accessibility

The heading text and start/end content must be HTML phrasing content. Textual slot content contributes to the accessible heading name; mark decorative content with `aria-hidden="true"`. Avoid buttons, links, and other interactive controls inside headings unless the interaction receives a dedicated accessibility review.

Native headings accept standard HTML attributes directly. On `db-heading`, `aria-*`, `data-*`, class, style, and id attributes are forwarded to the active native heading. Visual size never changes the semantic or ARIA heading level.
