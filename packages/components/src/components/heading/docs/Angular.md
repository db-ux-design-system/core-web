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

Choose `DBHeadingH1` through `DBHeadingH6` from the document hierarchy, never from appearance. `size` changes only visual size. Without `size`, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```html
<db-heading-h-6 size="2xl">A level-six heading displayed at 2xl</db-heading-h-6>
```

`fontWeight` accepts `black` and `light`; logical `alignment` follows the writing direction. `paragraphSpacing` adds exactly `1lh` at block-end when enabled. Density tokens provide responsive typography.

### Content, attributes and accessibility

Default content must be phrasing content and defines the accessible heading name. Mark decorative children with `aria-hidden="true"`. Standard `aria-*`, `data-*`, `class`, and `style` attributes are forwarded from the host element to the native heading. `id` is a regular input, not a forwarded attribute, and is rendered on the native heading.

```html
<db-heading-h-2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</db-heading-h-2>
```

### Heading with sibling content

`DBCustomHeading` is the styling wrapper for a heading you write yourself, optionally next to sibling content such as a permalink button. It relates to the Heading components the same way `DBCustomButton` relates to `DBButton`: it renders a plain `div` with no semantics of its own, you bring the native element, and the wrapper applies the styling.

```html
<db-custom-heading size="xl" font-weight="light">
	<h2 id="installation">Installation</h2>
	<db-custom-button variant="ghost" icon="link_chain" [noText]="true">
		<a href="#installation">Direct link to Installation</a>
	</db-custom-button>
</db-custom-heading>
```

The nested heading needs no class of its own, the wrapper styles it. Because the sibling content sits next to the heading instead of inside it, the accessible heading name stays clean and interactive siblings are separately reachable.

`size`, `fontWeight` and `paragraphSpacing` behave exactly as on the Heading components, and omitting `size` applies the same default level mapping. `alignment` aligns the items in the row together with the heading text.

A nested heading that already carries the `db-heading` class, for example a Heading component, keeps its own typography and ignores the wrapper's inputs. Use one or the other, not both.
