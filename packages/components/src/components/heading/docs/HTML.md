## HTML

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

### Native HTML and CSS class

Use `db-heading` on a native heading and choose the element from the document hierarchy. Omitting `data-visual-size` keeps each heading at its own level default (`h1` is the largest, `h6` the smallest).

```html
<h1 class="db-heading">A level-one heading at its default size</h1>
<h6 class="db-heading" data-visual-size="h1">
	A level-six heading displayed as an h1
</h6>
```

`data-visual-size` changes only the visual size. It accepts a heading level (`h1`-`h6`) or a paragraph size (`p-small`, `p-medium`, `p-large`). Use `data-font-weight="light"` as needed. Density tokens provide responsive typography.

Block-level text elements carry no `margin-block` by default. To add the default spacing of `1lh / 2` back, set `data-text-spacing="true"` on an ancestor (or the element itself).

### Web Components

Choose `db-heading-h-1` through `db-heading-h-6` from the document hierarchy.

```html
<db-heading-h-6 visual-size="h1">
	A level-six heading displayed as an h1
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

`db-custom-heading` is the styling wrapper for a heading you write yourself, optionally next to sibling content. It relates to the Heading components the same way `db-custom-button` relates to `db-button`: it has no semantics of its own, you bring the native element, and the wrapper applies the styling.

Put a plain `h1`-`h6` in the default slot. It needs no `db-heading` class, the wrapper styles it. Content that belongs next to the heading goes into the `startSlot` and `endSlot`:

```html
<db-custom-heading visual-size="h1" font-weight="light">
	<h2>Installation</h2>
	<db-button slot="endSlot" variant="ghost">More options</db-button>
</db-custom-heading>
```

Note the casing: the Web Component slot names are `startSlot` and `endSlot`, while the Angular and Vue outputs use `start-slot` and `end-slot`.

The equivalent CSS-only markup has no slots. Write the elements in the order you want them, the wrapper lays them out as a row:

```html
<div class="db-custom-heading" data-visual-size="h1" data-font-weight="light">
	<h2>Installation</h2>
	<button class="db-button" data-variant="ghost" type="button">
		More options
	</button>
</div>
```

Because the slot content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive content is separately reachable.

`visual-size` and `font-weight` behave exactly as on the Heading components, and omitting `visual-size` applies the same default level mapping. An unused slot adds no spacing.

A nested heading that already carries `db-heading`, for example a Heading component, keeps its own typography and ignores the wrapper's styling attributes. Use one or the other, not both.
