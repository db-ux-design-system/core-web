## React

> **Beta:** TextGroup is available as a beta component. Its API and visual design may change before the stable release.

For installation and configuration, see [`@db-ux/react-core-components`](https://www.npmjs.com/package/@db-ux/react-core-components).

`DBTextGroup` renders a presentational `div` that groups block-level text and owns the spacing and alignment of its children. It carries no semantics of its own: for a labelled region use `DBSection` and put the group inside.

```tsx
import {
	DBHeadingH3,
	DBParagraph,
	DBTextGroup
} from "@db-ux/react-core-components";

export const Intro = () => (
	<DBTextGroup textSpacing alignment="center">
		<DBHeadingH3>A heading starts the block</DBHeadingH3>
		<DBParagraph>A paragraph of body copy.</DBParagraph>
		<DBParagraph size="sm">A smaller paragraph.</DBParagraph>
	</DBTextGroup>
);
```

### Spacing

`textSpacing` gives every block-text child `0.5lh` of breathing room above and below, which amounts to about `1lh` between two adjacent children and `0.5lh` at the group's own outer edges. Without it the group adds no spacing at all.

The spacing is not the group's own: `textSpacing` renders `data-text-spacing`, and the foundations' required styles turn that into a `margin-block` on every `h1`-`h6` and `p` below it. The group only needs to set the attribute, which is why it works the same in every framework output.

Because the margin sits on the text element, `1lh` resolves against that element's own line height. A child with a smaller `size` therefore gets proportionally less spacing, and two children of different sizes end up somewhat closer than `1lh`.

`data-text-spacing="false"` opts a subtree back out, and the attribute also works on a block-text element itself, so a single paragraph can carry it without a group.

### Which children to use

The group knows nothing about its child types. Every `h1`-`h6` and `p` below it is spaced, whether it carries one of our classes or not, so plain `<h2>` and `<p>` elements work exactly like `DBParagraph` and `DBHeading`.

Other block elements are not covered: a `ul`, `ol` or `blockquote` keeps whatever margin it brings. Give it `margin-block: calc(1lh * var(--db-text-spacing, 0))` to join the rhythm, or `margin-block: 0` to take it out.

### Alignment

`alignment` takes the logical values `start`, `center` and `end`. The children inherit it, so it does not have to be repeated on each one. A nested `DBTextGroup` can set its own.

### Content, attributes and accessibility

Content always comes through children, there is no `text` prop. The `div` adds no role, so the group is invisible to assistive technology and only its children carry meaning.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `className` and `id` attributes are forwarded to the rendered element.
