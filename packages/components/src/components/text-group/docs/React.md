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

`textSpacing` gives every child `0.5lh` of breathing room above and below, which amounts to `1lh` between two adjacent children and `0.5lh` at the group's own outer edges, setting it against whatever precedes or follows it. Without the prop the group adds no spacing at all.

The value follows the computed line height rather than a spacing token, the same way `paragraphSpacing` does on `DBHeading`. It resolves against the typography of the group, so the distance stays the same no matter which `size` a child carries.

Spacing sits on the group as `row-gap` and `padding-block`, never as a margin on the children, which is what makes it behave identically in all frameworks.

### Which children to use

The group knows nothing about its child types, so the gap reaches every child. `DBParagraph` and `DBHeading` reset their own `margin-block`, which makes them share one rhythm out of the box.

A child that brings its own block margin adds it to the gap. That applies to plain `h1`-`h6` and `p` elements as much as to a `ul` or a `blockquote`, because the foundations' default styles give those a `margin-block`. Set `margin-block: 0` on such a child to keep a single rhythm.

### Alignment

`alignment` takes the logical values `start`, `center` and `end`. The children inherit it, so it does not have to be repeated on each one. A nested `DBTextGroup` can set its own.

### Content, attributes and accessibility

Content always comes through children, there is no `text` prop. The `div` adds no role, so the group is invisible to assistive technology and only its children carry meaning.

Native `aria-*`, `data-*`, `lang`, `title`, `style`, `className` and `id` attributes are forwarded to the rendered element.
