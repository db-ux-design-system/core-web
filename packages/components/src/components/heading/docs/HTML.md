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

`db-custom-heading` is a layout wrapper for a native heading plus sibling content, for example a permalink button. It has no heading semantics of its own: put a native `h1`-`h6` inside and the wrapper applies the matching default heading styles, so a bare heading needs no `db-heading` class.

```html
<db-custom-heading>
	<h2 id="installation">Installation</h2>
	<div
		class="db-custom-button"
		data-variant="ghost"
		data-no-text="true"
		data-icon="link_chain"
	>
		<a href="#installation">Direct link to Installation</a>
	</div>
</db-custom-heading>
```

The equivalent CSS-only markup:

```html
<div class="db-custom-heading">
	<h2 id="installation">Installation</h2>
	<a href="#installation">Direct link to Installation</a>
</div>
```

Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

The wrapper carries no typography properties. Everything that deviates from the default is set on the nested heading, which keeps one source of truth per property:

```html
<db-custom-heading>
	<h2 class="db-heading" data-size="xl" data-font-weight="light">
		Installation
	</h2>
	<a href="#installation">Direct link</a>
</db-custom-heading>
```

`alignment` on the wrapper aligns the items in the row. Text alignment inside the heading stays with the nested heading's own `data-alignment`.
