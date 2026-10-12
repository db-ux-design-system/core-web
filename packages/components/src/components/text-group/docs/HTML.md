## HTML

> **Beta:** TextGroup is available as a beta component. Its API and visual design may change before the stable release.

For CSS installation, see [`@db-ux/core-components`](https://www.npmjs.com/package/@db-ux/core-components). For custom elements, see [`@db-ux/wc-core-components`](https://www.npmjs.com/package/@db-ux/wc-core-components).

`db-text-group` renders a presentational `div` that groups block-level text and owns the spacing and alignment of its children. It carries no semantics of its own: for a labelled region use `db-section` and put the group inside.

### Native HTML and CSS class

```html
<div class="db-text-group" data-text-spacing="true" data-alignment="center">
	<p class="db-paragraph">A paragraph of body copy.</p>
	<p class="db-paragraph" data-size="sm">A smaller paragraph.</p>
</div>
```

### Web Components

```html
<db-text-group text-spacing alignment="center">
	<db-paragraph>A paragraph of body copy.</db-paragraph>
	<db-paragraph size="sm">A smaller paragraph.</db-paragraph>
</db-text-group>
```

### Spacing

`text-spacing` gives every child `0.5lh` of breathing room above and below, which amounts to `1lh` between two adjacent children and `0.5lh` at the group's own outer edges, setting it against whatever precedes or follows it. Without the attribute the group adds no spacing at all.

The value follows the computed line height rather than a spacing token, the same way `paragraph-spacing` does on `db-heading`. It resolves against the typography of the group, so the distance stays the same no matter which `data-size` a child carries.

Spacing sits on the group as `row-gap` and `padding-block`, never as a margin on the children, which is what makes it behave identically in all frameworks: the custom element hosts of the Angular and Web Components output are `display: contents` and would swallow a child margin.

### Which children to use

The group knows nothing about its child types, so the gap reaches every child. `db-paragraph` and `db-heading` reset their own `margin-block`, which makes them share one rhythm out of the box.

A child that brings its own block margin adds it to the gap. That applies to plain `h1`-`h6` and `p` elements as much as to a `ul` or a `blockquote`, because the foundations' default styles give those a `margin-block`. Set `margin-block: 0` on such a child to keep a single rhythm:

```html
<div class="db-text-group" data-text-spacing="true">
	<p class="db-paragraph">Spaced by the group alone.</p>
	<ul style="margin-block: 0">
		<li>Reset so the list keeps the same rhythm</li>
	</ul>
</div>
```

### Alignment

`alignment` takes the logical values `start`, `center` and `end`. The children inherit it, so it does not have to be repeated on each one. A nested `db-text-group` can set its own.

### Content and accessibility

Content always comes through children, there is no `text` property. The `div` adds no role, so the group is invisible to assistive technology and only its children carry meaning.

All `data-*` and `aria-*` attributes are forwarded to the rendered element, so no typed property is needed for them. `id` is a component property and is rendered on the element.
