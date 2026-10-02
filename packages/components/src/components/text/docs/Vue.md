## Vue

> **Beta:** The Text components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

### Which component to use

| Component          | Element | Use it for                                             |
| ------------------ | ------- | ------------------------------------------------------ |
| `DBText`           | `span`  | inline text inside a sentence or next to other content |
| `DBParagraph`      | `p`     | block-level body copy                                  |
| `DBParagraphGroup` | `div`   | grouping paragraphs and spacing them with a shared gap |

```vue
<script setup lang="ts">
import {
	DBParagraph,
	DBParagraphGroup,
	DBText
} from "@db-ux/v-core-components";
</script>

<template>
	<DBParagraphGroup gap="medium">
		<DBParagraph>A paragraph of body copy.</DBParagraph>
		<DBParagraph size="sm">
			A smaller paragraph with an <DBText>inline passage</DBText>.
		</DBParagraph>
	</DBParagraphGroup>
</template>
```

### Size

`size` accepts `3xl` through `3xs` and has **no default**. Omitting it inherits the size from the surrounding typography, which is what lets a size on the group apply to all of its paragraphs:

```vue
<DBParagraphGroup size="sm">
	<DBParagraph>Inherits sm from the group.</DBParagraph>
	<DBParagraph size="lg">Overrides it with lg.</DBParagraph>
</DBParagraphGroup>
```

Density tokens provide responsive typography, so there is no breakpoint-specific size property.

### Spacing

Spacing between paragraphs belongs to `DBParagraphGroup` and is set with `gap`, which takes `none`, `3x-small` through `3x-large`. A gap applies only between items, so the last paragraph adds no trailing space. `DBParagraph` resets the `margin-block` the foundations give a `p`, so the gap is the only source of spacing.

The group is intended for paragraphs. Other children are laid out and spaced the same way, since the gap belongs to the container, but a heading is better placed outside the group where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` on `DBParagraph` and `DBParagraphGroup`. On the group it is inherited by the paragraphs and does not have to be repeated. `DBText` has no alignment, because aligning an inline box within a line is not what `text-align` does.

### Content, attributes and accessibility

Content always comes through the default slot, there is no `text` prop.

`DBText` renders a `span`, which is phrasing content, so it is valid inside `dt`, `dd`, `legend`, `figcaption`, `blockquote`, `li`, `td`, `th`, `caption`, `label`, `summary` and `button`. `DBParagraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`.

```vue
<dl>
	<dt><DBText size="2xs">Departure</DBText></dt>
	<dd><DBText>Berlin Hauptbahnhof</DBText></dd>
</dl>
```

`visually-hidden` on `DBText` takes the text out of view while keeping it available to assistive technology, for context that is obvious visually but not in speech:

```vue
<DBParagraph>
	Ticket price: 29 euros
	<DBText :visually-hidden="true">
		, reduced fare including seat reservation
	</DBText>
</DBParagraph>
```

Do not use it to hide text that sighted users also need, and keep in mind it stays part of the accessible name of its surroundings.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `class` and `id` attributes are forwarded to the rendered element.
