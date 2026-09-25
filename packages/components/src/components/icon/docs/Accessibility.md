## Accessibility

### The icon is always decorative

`DBIcon` renders its `<span>` with `aria-hidden="true"` and `font-size: 0`. Both are intentional: the
element carries a font glyph, not information, so it is removed from the accessibility tree and any text
inside it is replaced by that glyph.

Two consequences:

- A **decorative** icon needs no label. `<db-icon icon="coach"></db-icon>` is complete and correct.
- The `text` property and children reach **neither** screen readers nor sighted users. Passing them has
  no effect. For the same reason `role` and `aria-label` set on `DBIcon` have no effect either -
  `aria-hidden="true"` removes the element from the accessibility tree regardless.

### Labelling an informative icon

When the icon is the only carrier of meaning - a status dot, an icon-only action - the accessible name
belongs on an element **around** it:

```html
<span role="img" aria-label="Coach">
	<db-icon icon="coach"></db-icon>
</span>
```

Prefer avoiding the wrapper altogether:

- Inside another component, use its `icon` property instead of a nested `DBIcon`
  (`<db-button icon="search">Search</db-button>`). The component then handles the labelling.
- Where a visible text label is acceptable, use the `data-icon` attribute on the labelled element
  instead of `DBIcon`. There the text stays exposed:
  `<span data-icon="coach">Coach</span>`.
