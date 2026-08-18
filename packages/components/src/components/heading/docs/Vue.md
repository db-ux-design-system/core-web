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

`DBCustomHeading` is a layout wrapper for a native heading plus sibling content, for example a permalink button. It renders a plain `div` with no heading semantics of its own. Nest a Heading component or a bare `h1`-`h6` inside; the wrapper applies the matching default heading styles either way.

```vue
<script setup lang="ts">
import {
	DBCustomButton,
	DBCustomHeading,
	DBHeadingH2
} from "@db-ux/v-core-components";
</script>

<template>
	<DBCustomHeading>
		<DBHeadingH2 id="installation">Installation</DBHeadingH2>
		<DBCustomButton variant="ghost" icon="link_chain" :no-text="true">
			<a href="#installation">Direct link to Installation</a>
		</DBCustomButton>
	</DBCustomHeading>
</template>
```

Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

The wrapper carries no typography properties: `size`, `fontWeight` and `paragraphSpacing` belong on the nested heading, which keeps one source of truth per property. `alignment` on the wrapper aligns the items in the row; text alignment inside the heading stays with the nested heading's own `alignment`.
