## Angular

> **Beta:** The Text components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

### Load a component

```ts
import { Component } from "@angular/core";
import {
	DBParagraph,
	DBParagraphGroup,
	DBText
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBParagraph, DBParagraphGroup, DBText],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

### Which component to use

| Component          | Element | Use it for                                             |
| ------------------ | ------- | ------------------------------------------------------ |
| `DBText`           | `span`  | inline text inside a sentence or next to other content |
| `DBParagraph`      | `p`     | block-level body copy                                  |
| `DBParagraphGroup` | `div`   | grouping paragraphs and spacing them with a shared gap |

```html
<db-paragraph-group gap="medium">
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm">
		A smaller paragraph with an <db-text>inline passage</db-text>.
	</db-paragraph>
</db-paragraph-group>
```

### Size

`size` accepts `3xl` through `3xs` and has **no default**. Omitting it inherits the size from the surrounding typography, which is what lets a size on the group apply to all of its paragraphs:

```html
<db-paragraph-group size="sm">
	<db-paragraph>Inherits sm from the group.</db-paragraph>
	<db-paragraph size="lg">Overrides it with lg.</db-paragraph>
</db-paragraph-group>
```

Density tokens provide responsive typography, so there is no breakpoint-specific size input.

### Spacing

Spacing between paragraphs belongs to `db-paragraph-group` and is set with `gap`, which takes `none`, `3x-small` through `3x-large`. A gap applies only between items, so the last paragraph adds no trailing space. `db-paragraph` resets the `margin-block` the foundations give a `p`, so the gap is the only source of spacing.

The group is intended for paragraphs. Other children are laid out and spaced the same way, since the gap belongs to the container, but a heading is better placed outside the group where it can use its own `paragraph-spacing`.

### Alignment

`alignment` takes the logical values `start`, `center` and `end` on `db-paragraph` and `db-paragraph-group`. On the group it is inherited by the paragraphs and does not have to be repeated. `db-text` has no alignment, because aligning an inline box within a line is not what `text-align` does.

### Content, attributes and accessibility

Content always comes through the default content, there is no `text` input.

`db-text` renders a `span`, which is phrasing content, so it is valid inside `dt`, `dd`, `legend`, `figcaption`, `blockquote`, `li`, `td`, `th`, `caption`, `label`, `summary` and `button`. `db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`.

```html
<dl>
	<dt><db-text size="2xs">Departure</db-text></dt>
	<dd><db-text>Berlin Hauptbahnhof</db-text></dd>
</dl>
```

`visually-hidden` on `db-text` takes the text out of view while keeping it available to assistive technology, for context that is obvious visually but not in speech:

```html
<db-paragraph>
	Ticket price: 29 euros
	<db-text visually-hidden>, reduced fare including seat reservation</db-text>
</db-paragraph>
```

Do not use it to hide text that sighted users also need, and keep in mind it stays part of the accessible name of its surroundings.

Standard `aria-*`, `data-*`, `lang`, `class` and `style` attributes are forwarded from the host element to the rendered element. `id` is a regular input, not a forwarded attribute, and is rendered on the element.
