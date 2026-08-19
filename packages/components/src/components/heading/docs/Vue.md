## Vue

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

### Semantics and visual size

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from appearance. `size` changes only visual size. Without `size`, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```vue
<script setup lang="ts">
import { DBHeadingH6 } from "@db-ux/v-core-components";
</script>

<template>
	<DBHeadingH6 size="2xl">A level-six heading displayed at 2xl</DBHeadingH6>
</template>
```

All visual sizes work with every semantic level. `fontWeight` accepts `black` and `light`; logical `alignment` follows the writing direction. `paragraphSpacing` adds exactly `1lh` at block-end when enabled. Density tokens provide responsive typography.

```vue
<DBHeadingH2
	alignment="end"
	font-weight="light"
	:paragraph-spacing="true"
	data-density="expressive"
>
	Responsive heading
</DBHeadingH2>
```

### Content, attributes and accessibility

The default content must be phrasing content and defines the accessible heading name. Mark decorative children with `aria-hidden="true"`. Native `aria-*`, `data-*`, title, style, class, and id attributes are forwarded to the native heading.

```vue
<DBHeadingH2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</DBHeadingH2>
```

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to a sibling action. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

```vue
<script setup lang="ts">
import { DBButton, DBCustomHeading } from "@db-ux/v-core-components";
</script>

<template>
	<DBCustomHeading size="xl" font-weight="light">
		<h2>Installation</h2>
		<DBButton variant="ghost">More options</DBButton>
	</DBCustomHeading>
</template>
```

The nested heading needs no class of its own, the wrapper styles it. Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

`size`, `fontWeight` and `paragraphSpacing` behave exactly as on the Heading components, and omitting `size` applies the same default level mapping. `alignment` aligns the items in the row together with the heading text.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's props. Use one or the other, not both.
