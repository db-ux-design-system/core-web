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

### Custom heading content

Prefer the native components whenever possible. `DBCustomHeading` accepts arbitrary children and renders a fixed `div` with `role="heading"`. Its required `semanticLevel` sets `aria-level` and the default visual size.

```html
<db-custom-heading [semanticLevel]="2" size="xl">
	<span aria-hidden="true">[</span>
	<div>Arbitrary custom content</div>
	<strong> inside one accessible heading</strong>
	<span aria-hidden="true">]</span>
</db-custom-heading>
```

The children must form one concise accessible heading. Do not nest a native heading or another `role="heading"`. Mark decorative content with `aria-hidden="true"`; child components may intentionally override inherited Heading typography.

`role` and `aria-level` are always derived from the component, so a manually passed `aria-level` is ignored. Change `semanticLevel` to change the exposed level.
