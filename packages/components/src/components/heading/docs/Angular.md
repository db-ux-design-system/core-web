## Angular

> **Beta:** The Heading components are available as beta components. Their API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

### Load a component

```ts
import { Component } from "@angular/core";
import { DBHeadingH2 } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBHeadingH2],
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

Default content must be phrasing content and defines the accessible heading name. Mark decorative children with `aria-hidden="true"`. Standard `aria-*`, `data-*`, class, style, and id attributes are forwarded to the native heading.

```html
<db-heading-h-2 id="account-heading" data-track-id="account">
	<span aria-hidden="true">[</span>Account<span aria-hidden="true">]</span>
</db-heading-h-2>
```
