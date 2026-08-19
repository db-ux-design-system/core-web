## HTML

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

### Native HTML and CSS class

Use `db-heading` on a native heading and choose the element from the document hierarchy. Omitting `data-size` maps `h1` to `xl`, `h2` to `lg`, `h3` to `md`, `h4` to `sm`, `h5` to `xs`, and `h6` to `2xs`.

```html
<h1 class="db-heading">A level-one heading with the default xl size</h1>
<h6 class="db-heading" data-size="2xl">A level-six heading displayed at 2xl</h6>
```

`data-size` changes only visual size. Use `data-font-weight="light"`, logical `data-alignment="start|center|end"`, and `data-paragraph-spacing="true"` as needed. Density tokens provide responsive typography.

### Web Components

Choose `db-heading-h-1` through `db-heading-h-6` from the document hierarchy.

```html
<db-heading-h-6 size="2xl" paragraph-spacing>
	A level-six heading displayed at 2xl
</db-heading-h-6>
```

### Content and accessibility

Heading children must be phrasing content and define the accessible heading name. Keep decorative content in the normal child order and mark it with `aria-hidden="true"`. Avoid interactive controls unless the interaction receives a dedicated accessibility review.

```html
<db-heading-h-2 id="account-heading">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</db-heading-h-2>
```

Native headings accept standard attributes directly. On the custom elements, `aria-*`, `data-*`, `class`, and `style` are forwarded from the host to the native heading. `id` is a component property, not a forwarded attribute, and is rendered on the native heading.

### Heading with sibling content

`db-custom-heading` is the styling wrapper for a heading you write yourself, optionally next to a sibling action. It relates to the Heading components the same way `db-custom-button` relates to `db-button`: it has no semantics of its own, you bring the native element, and the wrapper applies the styling.

Put a plain `h1`-`h6` inside. It needs no `db-heading` class, the wrapper styles it:

```html
<db-custom-heading size="xl" font-weight="light">
	<h2>Installation</h2>
	<db-button variant="ghost">More options</db-button>
</db-custom-heading>
```

The equivalent CSS-only markup:

```html
<div class="db-custom-heading" data-size="xl" data-font-weight="light">
	<h2>Installation</h2>
	<button class="db-button" data-variant="ghost" type="button">
		More options
	</button>
</div>
```

Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

`size`, `font-weight` and `paragraph-spacing` behave exactly as on the Heading components, and omitting `size` applies the same default level mapping. `alignment` aligns the items in the row together with the heading text.

A nested heading that already carries `db-heading`, for example a Heading component, keeps its own typography and ignores the wrapper's styling attributes. Use one or the other, not both.
