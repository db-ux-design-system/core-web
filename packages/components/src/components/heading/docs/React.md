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

`DBCustomHeading` is a layout wrapper for a native heading plus sibling content, for example a permalink button. It renders a plain `div` with no heading semantics of its own. Nest a Heading component or a bare `h1`-`h6` inside; the wrapper applies the matching default heading styles either way.

```tsx
import {
	DBCustomButton,
	DBCustomHeading,
	DBHeadingH2
} from "@db-ux/react-core-components";

export const SectionHeading = () => (
	<DBCustomHeading>
		<DBHeadingH2 id="installation">Installation</DBHeadingH2>
		<DBCustomButton variant="ghost" icon="link_chain" noText>
			<a href="#installation">Direct link to Installation</a>
		</DBCustomButton>
	</DBCustomHeading>
);
```

Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

The wrapper carries no typography properties: `size`, `fontWeight` and `paragraphSpacing` belong on the nested heading, which keeps one source of truth per property. `alignment` on the wrapper aligns the items in the row; text alignment inside the heading stays with the nested heading's own `alignment`.

`id`, `className`, `data-*`, `title` and `style` are forwarded to the wrapper `div`.
