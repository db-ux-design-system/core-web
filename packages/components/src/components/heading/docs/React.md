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

### Custom heading content

Prefer the native Heading components whenever possible. Use `DBCustomHeading` when the heading must contain arbitrary children that cannot be phrasing content. It always renders a `div` with `role="heading"`; the required `semanticLevel` sets `aria-level` and determines the default visual size. An explicit `size` changes only the appearance.

```tsx
import { DBCustomHeading } from "@db-ux/react-core-components";

export const CustomArticleHeading = () => (
	<DBCustomHeading semanticLevel={2} size="xl">
		<span aria-hidden="true">[</span>
		<div>Arbitrary custom content</div>
		<strong> inside one accessible heading</strong>
		<span aria-hidden="true">]</span>
	</DBCustomHeading>
);
```

The children must together describe one concise heading. Do not nest another native heading or an element with `role="heading"`, because that would expose duplicate heading semantics. Decorative children need `aria-hidden="true"`; child components with their own typography may intentionally override inherited Heading styles.

`role` and `aria-level` are always derived from the component, so a manually passed `aria-level` is ignored. Change `semanticLevel` to change the exposed level.
