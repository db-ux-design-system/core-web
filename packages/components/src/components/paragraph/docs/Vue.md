## Vue

> **Beta:** The Paragraph components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/v-core-components`](https://www.npmjs.com/package/@db-ux/v-core-components).

### Which component to use

| Component     | Element | Use it for                               |
| ------------- | ------- | ---------------------------------------- |
| `DBParagraph` | `p`     | block-level body copy                    |
| `DBTextGroup` | `div`   | grouping block-level text and spacing it |

For inline text inside a sentence use a plain `span`. There is no component for it.

```vue
<script setup lang="ts">
import { DBParagraph, DBTextGroup } from "@db-ux/v-core-components";
</script>

<template>
	<DBTextGroup :text-spacing="true">
		<DBParagraph>A paragraph of body copy.</DBParagraph>
		<DBParagraph size="sm" font-weight="black">
			A smaller, bolder paragraph with an <span>inline passage</span>.
		</DBParagraph>
	</DBTextGroup>
</template>
```

### Size and font weight

`size` accepts `lg`, `md` and `sm` and has **no default**. Omitting it inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size prop.

`font-weight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default. Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing

Spacing belongs to `DBTextGroup` and is switched on with `text-spacing`. It gives every child `0.5lh` of breathing room above and below, which amounts to `1lh` between two adjacent children and `0.5lh` at the group's own outer edges, setting it against whatever precedes or follows it.

The value follows the computed line height rather than a spacing token, the same way `paragraph-spacing` does on `DBHeading`. It resolves against the typography of the group, so the distance stays the same no matter which `size` a child carries.

Spacing sits on the group as `row-gap` and `padding-block`, never as a margin on the children, which is what makes it behave identically in all frameworks. `DBParagraph` additionally resets the `margin-block` the foundations give a `p`, so the group stays the only source of spacing. The price is that a standalone `DBParagraph` and a group without `text-spacing` render flush.

The group is intended for paragraphs, but since the gap belongs to the container it reaches every child, including one that carries none of our classes. Only `DBParagraph` resets its own block margin, so a foreign element that brings one — a `ul` for instance — adds it to the gap. Set `margin-block: 0` on such a child to keep a single rhythm. A heading is better placed outside the group, where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` and sits on `DBTextGroup`. The paragraphs inherit it, so it does not have to be repeated. `DBParagraph` has no alignment of its own.

### Content, attributes and accessibility

Content always comes through the default slot, there is no `text` prop.

`DBParagraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`. Use a `span` there.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `class` and `id` attributes are forwarded to the rendered element. That also covers the global `data-visually-hidden` annotation, which needs no prop of its own and requires the `visually-hidden` stylesheet:

```vue
<DBParagraph data-visually-hidden="true">
	Only announced by assistive technology.
</DBParagraph>
```
