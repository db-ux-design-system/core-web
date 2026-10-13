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

`text-spacing` gives every block-text child `0.5lh` of breathing room above and below, which amounts to about `1lh` between two adjacent children and `0.5lh` at the group's own outer edges. Without it the group adds no spacing at all.

The spacing is not the group's own: `text-spacing` renders `data-text-spacing`, and the foundations' required styles turn that into a `margin-block` on every `h1`-`h6` and `p` below it. The group only needs to set the attribute, which is why it works the same in every framework output.

Because the margin sits on the text element, `1lh` resolves against that element's own line height. A child with a smaller `data-size` therefore gets proportionally less spacing, and two children of different sizes end up somewhat closer than `1lh`.

`data-text-spacing="false"` opts a subtree back out, and the attribute also works on a block-text element itself, so a single paragraph can carry it without a group.

### Which children to use

The group knows nothing about its child types. Every `h1`-`h6` and `p` below it is spaced, whether it carries one of our classes or not, so plain `<h2>` and `<p>` elements work exactly like `db-paragraph` and `db-heading`.

Other block elements are not covered: a `ul`, `ol` or `blockquote` keeps whatever margin it brings. Give it `margin-block: calc(1lh * var(--db-text-spacing, 0))` to join the rhythm, or `margin-block: 0` to take it out.

### Alignment

`alignment` takes the logical values `start`, `center` and `end`. The children inherit it, so it does not have to be repeated on each one. A nested `db-text-group` can set its own.

### Content and accessibility

Content always comes through children, there is no `text` property. The `div` adds no role, so the group is invisible to assistive technology and only its children carry meaning.

All `data-*` and `aria-*` attributes are forwarded to the rendered element, so no typed property is needed for them. `id` is a component property and is rendered on the element.
