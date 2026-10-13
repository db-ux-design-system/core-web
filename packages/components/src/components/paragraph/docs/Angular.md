## Angular

> **Beta:** Paragraph is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/ngx-core-components`](https://www.npmjs.com/package/@db-ux/ngx-core-components).

`db-paragraph` renders a `p` for block-level body copy. For inline text inside a sentence use a plain `span`, there is no component for it. Spacing between several paragraphs belongs to [`db-text-group`](../text-group/properties).

### Load the component

```ts
import { Component } from "@angular/core";
import { DBParagraph } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-example",
	imports: [DBParagraph],
	standalone: true,
	templateUrl: "./example.component.html"
})
export class ExampleComponent {}
```

```html
<db-paragraph>A paragraph of body copy.</db-paragraph>
<db-paragraph size="sm" font-weight="black">
	A smaller, bolder paragraph with an <span>inline passage</span>.
</db-paragraph>
```

### Size and font weight

`size` accepts `lg`, `md` and `sm` and has **no default**. Omitting it inherits the size from the surrounding typography. Density tokens provide responsive typography, so there is no breakpoint-specific size input.

`font-weight` selects the font variant: `black` resolves to a weight of 900 and `regular` to 400. It also has no default. Note that the open-source fallback font ships no 900 face for the body family, so without the DB theme fonts `black` renders like bold.

### Spacing and alignment

`db-paragraph` renders a `p`, so block spacing comes from the foundations' `data-text-spacing` opt-in: without it the paragraph renders flush, with it on the element or any ancestor it gets `0.5lh` above and below. A surrounding [`db-text-group`](../text-group/properties) sets that attribute for a whole block.

There is deliberately no `text-align`, which is what lets the `alignment` of a `db-text-group` reach the paragraph by inheritance.

### Content, attributes and accessibility

Content always comes through the default content, there is no `text` input.

`db-paragraph` renders a `p`, which is flow content, so it fits in `dd`, `figcaption`, `blockquote`, `li` and `td`, but **not** in `legend`, `label`, `summary` or `button`. Use a `span` there.

Body copy gets `text-wrap: pretty`, the counterpart to `text-wrap: balance` on headings. It is a progressive enhancement: browsers without support compute `wrap`.

Standard `aria-*`, `data-*`, `role`, `title`, `class` and `style` attributes are forwarded from the host element to the rendered element. That also covers the global `data-visually-hidden` annotation, which needs no input of its own and requires the `visually-hidden` stylesheet:

```html
<db-paragraph data-visually-hidden="true">
	Only announced by assistive technology.
</db-paragraph>
```

`lang` is **not** forwarded. It stays on the `<db-paragraph>` host, which the `<p>` inherits it from, so rendering and assistive technology are unaffected but a selector such as `p[lang]` does not match.

`id` is a regular input, not a forwarded attribute, and is rendered on the element.
