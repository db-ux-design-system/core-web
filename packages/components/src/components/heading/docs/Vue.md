## Vue

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

### Semantics and visual size

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from appearance. `visualSize` changes only visual size. Without `visualSize`, each heading keeps its own level default (`h1` is the largest, `h6` the smallest).

```vue
<script setup lang="ts">
import { DBHeadingH6 } from "@db-ux/v-core-components";
</script>

<template>
	<DBHeadingH6 visual-size="h1"
		>A level-six heading displayed as an h1</DBHeadingH6
	>
</template>
```

`visualSize` accepts a heading level (`h1`-`h6`) or a paragraph size (`p-small`, `p-medium`, `p-large`) and works with every semantic level. `fontWeight` accepts `black` and `light`. Density tokens provide responsive typography.

```vue
<DBHeadingH2 font-weight="light" data-density="expressive">
	Responsive heading
</DBHeadingH2>
```

Block-level text elements carry no `margin-block` by default. To add the default spacing of `1lh / 2` back, set `data-text-spacing="true"` on an ancestor (or the element itself).

### Content, attributes and accessibility

The default content must be phrasing content and defines the accessible heading name. Mark decorative children with `aria-hidden="true"`. Native `aria-*`, `data-*`, title, style, class, and id attributes are forwarded to the native heading.

```vue
<DBHeadingH2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</DBHeadingH2>
```

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to sibling content. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

The default slot is the heading. Content that belongs next to it goes into the `start-slot` and `end-slot`, which render before and after the default slot:

```vue
<script setup lang="ts">
import { DBButton, DBCustomHeading } from "@db-ux/v-core-components";
</script>

<template>
	<DBCustomHeading visual-size="h1" font-weight="light">
		<h2>Installation</h2>
		<template #end-slot>
			<DBButton variant="ghost">More options</DBButton>
		</template>
	</DBCustomHeading>
</template>
```

The nested heading needs no class of its own, the wrapper styles it. Because the slot content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive content is separately reachable.

`visualSize` and `fontWeight` behave exactly as on the Heading components, and omitting `visualSize` applies the same default level mapping. An unused slot adds no spacing.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's props. Use one or the other, not both.
