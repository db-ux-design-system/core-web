## React

> **Beta:** `DBHeading` is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/react-core-components`](https://www.npmjs.com/package/@db-ux/react-core-components).

### Semantics and visual size

`as` is required and renders exactly one native `h1` through `h6`. Choose the level from the document hierarchy, never from the desired appearance. `size` changes only the visual headline size and does not change the accessible heading level. If `size` is omitted, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```tsx
import { DBHeading } from "@db-ux/react-core-components";

export const ArticleHeading = () => (
	<DBHeading as="h6" size="2xl">
		A level-six heading displayed at 2xl
	</DBHeading>
);
```

All visual sizes (`3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`, `3xs`) are valid with every semantic level. `fontWeight` accepts `black` (default) and `light`.

### Alignment, density and spacing

`alignment="start"` is the default. `start` and `end` are logical values and therefore follow the writing direction in RTL layouts; `center` remains centered. Existing density tokens provide responsive typography automatically. Long headings use `text-wrap: balance` and safe wrapping.

`paragraphSpacing` is opt-in: omitted or `false` keeps every margin at zero, while `true` adds exactly `1lh` at block-end only.

```tsx
<DBHeading
	as="h2"
	alignment="end"
	fontWeight="light"
	paragraphSpacing
	data-density="expressive"
>
	Responsive heading
</DBHeading>
```

### Slots, attributes and accessibility

`children` is the main heading content. `startSlot` and `endSlot` render before and after it and must contain phrasing content only. Text in any of these areas contributes to the accessible heading name. Mark decorative adornments with `aria-hidden="true"`; avoid interactive controls inside headings unless the interaction receives a dedicated accessibility review.

```tsx
<DBHeading
	as="h2"
	id="account-heading"
	data-track-id="account"
	startSlot={<span aria-hidden="true">[</span>}
	endSlot={<span aria-hidden="true">]</span>}
>
	Account
</DBHeading>
```

Native `aria-*`, `data-*`, `title`, `style`, `className`, and `id` attributes are forwarded to the active native heading. Changing `size` never changes its semantic or ARIA level.
