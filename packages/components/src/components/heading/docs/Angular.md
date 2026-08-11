## Angular

> **Beta:** `DBHeading` is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

### Load the component

```ts
import { Component } from "@angular/core";
import { DBHeading } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBHeading],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

### Semantics and visual size

`as` is required and renders exactly one native `h1` through `h6`. Choose the level from the document hierarchy, never from the desired appearance. `size` changes only the visual headline size and never the accessible heading level. Without `size`, the mapping is `h1`/`xl`, `h2`/`lg`, `h3`/`md`, `h4`/`sm`, `h5`/`xs`, and `h6`/`2xs`.

```html
<db-heading as="h6" size="2xl">
	A level-six heading displayed at 2xl
</db-heading>
```

All visual sizes (`3xl` through `3xs`) work with every semantic level. `fontWeight` accepts `black` (default) and `light`.

### Alignment, density and spacing

`alignment="start"` is the default. Logical `start` and `end` follow RTL writing direction; `center` remains centered. Density tokens make the headline typography responsive. Long headings use `text-wrap: balance` and safe wrapping.

Omitted or false `paragraphSpacing` adds no margin. True adds exactly `1lh` at block-end only.

```html
<db-heading
	as="h2"
	alignment="end"
	fontWeight="light"
	[paragraphSpacing]="true"
	data-density="expressive"
>
	Responsive heading
</db-heading>
```

### Slots, attributes and accessibility

Default content is the main heading content. Add phrasing content with `start-slot` and `end-slot`; it is rendered before and after the default content. Text in all three areas contributes to the accessible heading name. Mark decorative adornments with `aria-hidden="true"`; avoid interactive controls inside headings unless accessibility is reviewed specifically.

```html
<db-heading as="h2" id="account-heading" data-track-id="account">
	<span start-slot aria-hidden="true">[</span>
	Account
	<span end-slot aria-hidden="true">]</span>
</db-heading>
```

Standard `aria-*`, `data-*`, class, style, and id attributes are forwarded to the active native heading. Changing `size` never changes its semantic or ARIA level.
