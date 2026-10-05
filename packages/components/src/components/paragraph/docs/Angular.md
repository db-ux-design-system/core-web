## Angular

> **Beta:** The Paragraph components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

### Load a component

```ts
import { Component } from "@angular/core";
import { DBParagraph, DBTextGroup } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBParagraph, DBTextGroup],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

### Which component to use

| Component       | Element | Use it for                               |
| --------------- | ------- | ---------------------------------------- |
| `db-paragraph`  | `p`     | block-level body copy                    |
| `db-text-group` | `div`   | grouping block-level text and spacing it |

For inline text inside a sentence use a plain `span`. There is no component for it.

```html
<db-text-group text-spacing>
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm" font-weight="black">
		A smaller, bolder paragraph with an <span>inline passage</span>.
	</db-paragraph>
</db-text-group>
```

### Size and font weight

`size` accepts `lg`, `md` and `sm` and has **no default**. Omitting it inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size input.

`font-weight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default. Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing

Spacing belongs to `db-text-group` and is switched on with `text-spacing`. It gives every child `0.5lh` at block-start and block-end, so two adjacent children end up `1lh` apart while the group keeps half a line height at its own outer edges, which sets it against whatever precedes or follows it.

The value follows the computed line height rather than a spacing token, the same way `paragraph-spacing` does on `db-heading`. Because it resolves against each child's own typography, a smaller paragraph also gets a proportionally smaller spacing.

`db-paragraph` resets the `margin-block` the foundations give a `p`, so the group's spacing is the only source of spacing.

The group is intended for paragraphs. Other children are laid out and spaced the same way, since the gap belongs to the container, but a heading is better placed outside the group where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` and sits on `db-text-group`. The paragraphs inherit it, so it does not have to be repeated. `db-paragraph` has no alignment of its own.

### Content, attributes and accessibility

Content always comes through the default content, there is no `text` input.

`db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`. Use a `span` there.

Standard `aria-*`, `data-*`, `lang`, `class` and `style` attributes are forwarded from the host element to the rendered element. That also covers the global `data-visually-hidden` annotation, which needs no input of its own and requires the `visually-hidden` stylesheet:

```html
<db-paragraph data-visually-hidden="true">
	Only announced by assistive technology.
</db-paragraph>
```

`id` is a regular input, not a forwarded attribute, and is rendered on the element.
