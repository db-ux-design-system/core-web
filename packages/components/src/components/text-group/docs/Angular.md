## Angular

> **Beta:** TextGroup is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

`db-text-group` renders a presentational `div` that groups block-level text and owns the spacing and alignment of its children. It carries no semantics of its own: for a labelled region use `db-section` and put the group inside.

### Load the component

```ts
import { Component } from "@angular/core";
import {
	DBHeadingH3,
	DBParagraph,
	DBTextGroup
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBTextGroup, DBParagraph, DBHeadingH3],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

```html
<db-text-group text-spacing alignment="center">
	<db-heading-h-3>A heading starts the block</db-heading-h-3>
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm">A smaller paragraph.</db-paragraph>
</db-text-group>
```

### Spacing

`text-spacing` gives every child `0.5lh` of breathing room above and below, which amounts to `1lh` between two adjacent children and `0.5lh` at the group's own outer edges, setting it against whatever precedes or follows it. Without the input the group adds no spacing at all.

The value follows the computed line height rather than a spacing token, the same way `paragraph-spacing` does on `db-heading`. It resolves against the typography of the group, so the distance stays the same no matter which `size` a child carries.

Spacing sits on the group as `row-gap` and `padding-block`, never as a margin on the children. That matters in Angular: the component hosts are `display: contents` and would swallow a child margin, while `display: contents` is resolved before the flex items are determined, so the gap reaches the rendered elements themselves.

### Which children to use

The group knows nothing about its child types, so the gap reaches every child. `db-paragraph` and `db-heading` reset their own `margin-block`, which makes them share one rhythm out of the box.

A child that brings its own block margin adds it to the gap. That applies to plain `h1`-`h6` and `p` elements as much as to a `ul` or a `blockquote`, because the foundations' default styles give those a `margin-block`. Set `margin-block: 0` on such a child to keep a single rhythm.

### Alignment

`alignment` takes the logical values `start`, `center` and `end`. The children inherit it, so it does not have to be repeated on each one. A nested `db-text-group` can set its own.

### Content, attributes and accessibility

Content always comes through the default content, there is no `text` input. The `div` adds no role, so the group is invisible to assistive technology and only its children carry meaning.

Standard `aria-*`, `data-*`, `role`, `title`, `class` and `style` attributes are forwarded from the host element to the rendered element. `id` is a regular input and is rendered on the element.
