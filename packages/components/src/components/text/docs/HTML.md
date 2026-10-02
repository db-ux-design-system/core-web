## HTML

> **Beta:** The Text components are available as beta components. Their API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

### Which component to use

| Component            | Element | Use it for                                               |
| -------------------- | ------- | -------------------------------------------------------- |
| `db-text`            | `span`  | inline text inside a sentence or next to other content   |
| `db-paragraph`       | `p`     | block-level body copy                                    |
| `db-paragraph-group` | `div`   | grouping paragraphs and spacing them with a shared `gap` |

### Native HTML and CSS class

```html
<div class="db-paragraph-group" data-gap="medium">
	<p class="db-paragraph">A paragraph of body copy.</p>
	<p class="db-paragraph" data-size="sm">
		A smaller paragraph with an <span class="db-text">inline passage</span>.
	</p>
</div>
```

### Web Components

```html
<db-paragraph-group gap="medium">
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm">
		A smaller paragraph with an <db-text>inline passage</db-text>.
	</db-paragraph>
</db-paragraph-group>
```

### Size

`size` accepts `3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs` and `3xs`, and it has **no default**. Leaving it out inherits the size from the surrounding typography, which is what lets a size on the group apply to all of its paragraphs:

```html
<db-paragraph-group size="sm">
	<db-paragraph>Inherits sm from the group.</db-paragraph>
	<db-paragraph size="lg">Overrides it with lg.</db-paragraph>
</db-paragraph-group>
```

Density tokens provide responsive typography, so there is no breakpoint-specific size property.

### Spacing

Spacing between paragraphs belongs to `db-paragraph-group` and is set with `gap`, which accepts `none`, `3x-small`, `2x-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `2x-large` and `3x-large`. Because a gap applies only between items, the last paragraph adds no trailing space.

`db-paragraph` resets the `margin-block` that the foundations' default styles give a `p`, so the gap is the only source of spacing and the two never add up.

The group is intended for paragraphs. Other content is laid out and spaced just the same, since the gap belongs to the container, but a heading is better placed outside the group where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` and works on `db-paragraph` and `db-paragraph-group`. On the group it is inherited by the paragraphs, so it does not have to be repeated. There is no alignment on `db-text`, because aligning an inline box within a line is not what `text-align` does.

### Content and accessibility

Content always comes through children, there is no `text` property.

`db-text` renders a `span`, which is phrasing content, so it is valid inside `dt`, `dd`, `legend`, `figcaption`, `blockquote`, `li`, `td`, `th`, `caption`, `label`, `summary` and `button`. `db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`, which accept phrasing content only.

```html
<dl>
	<dt><db-text size="2xs">Departure</db-text></dt>
	<dd><db-text>Berlin Hauptbahnhof</db-text></dd>
</dl>
```

`visually-hidden` on `db-text` removes the text from view while keeping it available to assistive technology, for adding context that is obvious visually but not in speech:

```html
<db-paragraph>
	Ticket price: 29 euros
	<db-text visually-hidden>, reduced fare including seat reservation</db-text>
</db-paragraph>
```

Do not use it to hide text that sighted users also need, and keep in mind it stays part of the accessible name of its surroundings.

All `data-*` and `aria-*` attributes are forwarded to the rendered element, so no typed property is needed for them. `id` is a component property and is rendered on the element.
