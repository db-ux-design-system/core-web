## Vue

> **Beta:** `DBHeading` is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

### Semantics and visual size

`as` is required and renders exactly one native `h1` through `h6`. Choose the level from the document hierarchy, never from the desired appearance. `size` changes only the visual headline size and never the accessible heading level. Without `size`, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```vue
<script setup lang="ts">
import { DBHeading } from "@db-ux/v-core-components";
</script>

<template>
	<DBHeading as="h6" size="2xl">
		A level-six heading displayed at 2xl
	</DBHeading>
</template>
```

All visual sizes (`3xl` through `3xs`) work with every semantic level. `fontWeight` accepts `black` (default) and `light`.

### Alignment, density and spacing

`alignment="start"` is the default. Logical `start` and `end` follow RTL writing direction; `center` remains centered. Density tokens make the headline typography responsive. Long headings use `text-wrap: balance` and safe wrapping.

Omitted or false `paragraphSpacing` adds no margin. True adds exactly `1lh` at block-end only.

```vue
<DBHeading
	as="h2"
	alignment="end"
	font-weight="light"
	:paragraph-spacing="true"
	data-density="expressive"
>
	Responsive heading
</DBHeading>
```

### Slots, attributes and accessibility

The default slot is the main heading content. Named `#start-slot` and `#end-slot` slots render before and after it and must contain phrasing content only. Text in all three areas contributes to the accessible heading name. Mark decorative adornments with `aria-hidden="true"`; avoid interactive controls inside headings unless accessibility is reviewed specifically.

```vue
<DBHeading as="h2" id="account-heading" data-track-id="account">
	<template #start-slot>
		<span aria-hidden="true">[</span>
	</template>
	Account
	<template #end-slot>
		<span aria-hidden="true">]</span>
	</template>
</DBHeading>
```

Native `aria-*`, `data-*`, `title`, `style`, class, and id attributes are forwarded to the active native heading. Changing `size` never changes its semantic or ARIA level.
