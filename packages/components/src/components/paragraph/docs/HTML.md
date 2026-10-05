## HTML

> **Beta:** The Paragraph components are available as beta components. Their API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

### Which component to use

| Component       | Element | Use it for                               |
| --------------- | ------- | ---------------------------------------- |
| `db-paragraph`  | `p`     | block-level body copy                    |
| `db-text-group` | `div`   | grouping block-level text and spacing it |

For inline text inside a sentence use a plain `span`. There is no component for it.

### Native HTML and CSS class

```html
<div class="db-text-group" data-text-spacing="true">
	<p class="db-paragraph">A paragraph of body copy.</p>
	<p class="db-paragraph" data-size="sm" data-font-weight="black">
		A smaller, bolder paragraph with an <span>inline passage</span>.
	</p>
</div>
```

### Web Components

```html
<db-text-group text-spacing>
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm" font-weight="black">
		A smaller, bolder paragraph.
	</db-paragraph>
</db-text-group>
```

### Size and font weight

`size` accepts `lg`, `md` and `sm`, and it has **no default**. Leaving it out inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size property.

`font-weight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default.

Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing

Spacing belongs to `db-text-group` and is switched on with `text-spacing`. It gives every child `0.5lh` of breathing room above and below, which amounts to `1lh` between two adjacent children and `0.5lh` at the group's own outer edges, setting it against whatever precedes or follows it.

The value follows the computed line height rather than a spacing token, the same way `paragraph-spacing` does on `db-heading`. It resolves against the typography of the group, so the distance stays the same no matter which `data-size` a child carries.

Spacing sits on the group as `row-gap` and `padding-block`, never as a margin on the children, which is what makes it behave identically in all frameworks: the custom element hosts of the Angular and Web Components output are `display: contents` and would swallow a child margin. `db-paragraph` additionally resets the `margin-block` the foundations' default styles give a `p`, so the group stays the only source of spacing. The price is that a standalone `db-paragraph` and a group without `text-spacing` render flush.

The group is intended for paragraphs. Other content is laid out and spaced just the same, since the gap belongs to the container, but a heading is better placed outside the group where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` and sits on `db-text-group`. The paragraphs inherit it, so it does not have to be repeated. `db-paragraph` has no alignment of its own.

### Content and accessibility

Content always comes through children, there is no `text` property.

`db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`, which accept phrasing content only. Use a `span` there.

All `data-*` and `aria-*` attributes are forwarded to the rendered element, so no typed property is needed for them. That also covers the global `data-visually-hidden` annotation, which removes an element from view while keeping it available to assistive technology and requires the `visually-hidden` stylesheet:

```html
<db-paragraph data-visually-hidden="true">
	Only announced by assistive technology.
</db-paragraph>
```

`id` is a component property and is rendered on the element.
