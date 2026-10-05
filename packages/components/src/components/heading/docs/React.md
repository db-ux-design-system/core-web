## React

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/react-core-components`](https://www.npmjs.com/package/@db-ux/react-core-components).

### Semantics and visual size

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from the desired appearance. `visualSize` changes only the visual headline size. Without `visualSize`, each heading keeps its own level default (`h1` is the largest, `h6` the smallest).

```tsx
import { DBHeadingH6 } from "@db-ux/react-core-components";

export const ArticleHeading = () => (
	<DBHeadingH6 visualSize="h1">
		A level-six heading displayed as an h1
	</DBHeadingH6>
);
```

`visualSize` accepts a heading level (`h1`-`h6`) or a paragraph size (`p-small`, `p-medium`, `p-large`) and works with every semantic level. `fontWeight` accepts `black` (default) and `light`. Density tokens provide responsive typography.

```tsx
<DBHeadingH2 fontWeight="light" data-density="expressive">
	Responsive heading
</DBHeadingH2>
```

Block-level text elements carry no `margin-block` by default. To add the default spacing of `1lh / 2` back, set `data-text-spacing="true"` on an ancestor (or the element itself).

### Content, attributes and accessibility

Children must be phrasing content and define the accessible heading name. Keep decorative children in their intended order and mark them with `aria-hidden="true"`. Avoid interactive controls inside headings unless the interaction receives a dedicated accessibility review.

```tsx
<DBHeadingH2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</DBHeadingH2>
```

Native `aria-*`, `data-*`, `title`, `style`, `className`, and `id` attributes are forwarded to the native heading.

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to sibling content. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

The children are the heading. Content that belongs next to it goes into `startSlot` or `endSlot`, which render before and after the children:

```tsx
import { DBButton, DBCustomHeading } from "@db-ux/react-core-components";

export const SectionHeading = () => (
	<DBCustomHeading
		visualSize="h1"
		fontWeight="light"
		endSlot={<DBButton variant="ghost">More options</DBButton>}
	>
		<h2>Installation</h2>
	</DBCustomHeading>
);
```

The nested heading needs no class of its own, the wrapper styles it. Because the slot content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive content is separately reachable.

`visualSize` and `fontWeight` behave exactly as on the Heading components, and omitting `visualSize` applies the same default level mapping. An unused slot adds no spacing.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's properties. Use one or the other, not both.

`id`, `className`, `data-*`, `title` and `style` are forwarded to the wrapper `div`.
