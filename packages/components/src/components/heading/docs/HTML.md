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

Native headings accept standard attributes directly. Custom-element `aria-*`, `data-*`, class, style, and id attributes are forwarded to the native heading.
