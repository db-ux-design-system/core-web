## Accessibility

### Active item / current page

To implicitly set a `NavigationItem` to **active**, the attribute `aria-current="page"` is applied to the contained anchor.
Some frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used.

This leads to:

- the `NavigationItem` and all parent `NavigationItems` are displayed as **active** via `css` (bold, if necessary with indicator)
- accessibility is granted correctly. see: [MDN aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)

For other purposes, `NavigationItems` can also be set to active with their prop `active`. However, this does not guarantee correct a11y.
