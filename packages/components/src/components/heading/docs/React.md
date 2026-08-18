## React

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/react-core-components`](https://www.npmjs.com/package/@db-ux/react-core-components).

### Semantics and visual size

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from the desired appearance. `size` changes only the visual headline size. Without `size`, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```tsx
import { DBHeadingH6 } from "@db-ux/react-core-components";

export const ArticleHeading = () => (
	<DBHeadingH6 size="2xl">A level-six heading displayed at 2xl</DBHeadingH6>
);
```

All visual sizes (`3xl` through `3xs`) work with every semantic level. `fontWeight` accepts `black` (default) and `light`. Logical `alignment` values follow the writing direction. `paragraphSpacing` adds exactly `1lh` at block-end when enabled. Density tokens provide responsive typography.

```tsx
<DBHeadingH2
	alignment="end"
	fontWeight="light"
	paragraphSpacing
	data-density="expressive"
>
	Responsive heading
</DBHeadingH2>
```

### Content, attributes and accessibility

Children must be phrasing content and define the accessible heading name. Keep decorative children in their intended order and mark them with `aria-hidden="true"`. Avoid interactive controls inside headings unless the interaction receives a dedicated accessibility review.

```tsx
<DBHeadingH2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</DBHeadingH2>
```

Native `aria-*`, `data-*`, `title`, `style`, `className`, and `id` attributes are forwarded to the native heading.

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to sibling content such as a permalink button. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

```tsx
import { DBCustomButton, DBCustomHeading } from "@db-ux/react-core-components";

export const SectionHeading = () => (
	<DBCustomHeading size="xl" fontWeight="light">
		<h2 id="installation">Installation</h2>
		<DBCustomButton variant="ghost" icon="link_chain" noText>
			<a href="#installation">Direct link to Installation</a>
		</DBCustomButton>
	</DBCustomHeading>
);
```

The nested heading needs no class of its own, the wrapper styles it. Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

`size`, `fontWeight` and `paragraphSpacing` behave exactly as on the Heading components, and omitting `size` applies the same default level mapping. `alignment` aligns the items in the row together with the heading text.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's properties. Use one or the other, not both.

`id`, `className`, `data-*`, `title` and `style` are forwarded to the wrapper `div`.
