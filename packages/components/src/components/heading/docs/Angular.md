## Angular

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

### Load a component

```ts
import { Component } from "@angular/core";
import { DBCustomHeading, DBHeadingH2 } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBCustomHeading, DBHeadingH2],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

### Semantics and visual size

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from appearance. A heading-level `visualSize` (`h1`-`h6`) changes the visual headline size; a paragraph `visualSize` (`p-small`, `p-medium`, `p-large`) switches the heading to the matching body typography (face, size and weight) so it reads as running text. Without `visualSize`, each heading keeps its own level default (`h1` is the largest, `h6` the smallest).

```html
<db-heading-h-6 visual-size="h1">
	A level-six heading displayed as an h1
</db-heading-h-6>
```

`visualSize` accepts a heading level (`h1`-`h6`) or a paragraph size (`p-small`, `p-medium`, `p-large`). `fontWeight` accepts `black` and `light`. Density tokens provide responsive typography.

Block-level text elements carry no `margin-block` by default. To add the default spacing of `1lh / 2` back, set `data-text-spacing="true"` on an ancestor (or the element itself).

### Content, attributes and accessibility

Default content must be phrasing content and defines the accessible heading name. Mark decorative children with `aria-hidden="true"`. Standard `aria-*`, `data-*`, `class`, and `style` attributes are forwarded from the host element to the native heading. `id` is a regular input, not a forwarded attribute, and is rendered on the native heading.

```html
<db-heading-h-2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</db-heading-h-2>
```

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to sibling content. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

The default content is the heading. Content that belongs next to it is projected through the `start-slot` and `end-slot` attributes and renders before and after the default content:

```html
<db-custom-heading visual-size="h1" font-weight="light">
	<h2>Installation</h2>
	<db-button end-slot variant="ghost">More options</db-button>
</db-custom-heading>
```

The nested heading needs no class of its own, the wrapper styles it. Because the slot content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive content is separately reachable.

`visualSize` and `fontWeight` behave exactly as on the Heading components, and omitting `visualSize` applies the same default level mapping. An unused slot adds no spacing.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's inputs. Use one or the other, not both.
