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

### Custom heading content

Prefer the native components whenever possible. `DBCustomHeading` accepts arbitrary children and renders a fixed `div` with `role="heading"`. Its required `semanticLevel` sets `aria-level` and the default visual size.

```vue
<script setup lang="ts">
import { DBCustomHeading } from "@db-ux/v-core-components";
</script>

<template>
	<DBCustomHeading :semantic-level="2" size="xl">
		<span aria-hidden="true">[</span>
		<div>Arbitrary custom content</div>
		<strong> inside one accessible heading</strong>
		<span aria-hidden="true">]</span>
	</DBCustomHeading>
</template>
```

The children must form one concise accessible heading. Do not nest a native heading or another `role="heading"`. Mark decorative content with `aria-hidden="true"`; child components may intentionally override inherited Heading typography.

`role` and `aria-level` are always derived from the component, so a manually passed `aria-level` is ignored. Change `semanticLevel` to change the exposed level.
