## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The CSS package provides the Pagination styles. Keep the active page and the
button behavior synchronized with your application state.

Three things are easy to miss when writing the markup by hand:

- The previous/next buttons are icon-only, and `data-icon` is all they need for it.
  The item hides the label off that attribute, so the text stays in the DOM as the
  accessible name.
- Every page button needs an `aria-label` that names the page in context
  (`Page 5 of 10`), because the visible text is only a bare number. The active
  page additionally carries `aria-current="page"`.
- Skipped page ranges are not elements. They are drawn by the page that borders the
  gap, through `data-ellipsis-wide` and `data-ellipsis-collapsed` with the values
  `before`, `after` or `both`. That keeps the list free of decorative entries and
  the dots out of the accessibility tree, because a pseudo element with alternative
  text has no accessible name.
- Every page `<li>` is a pagination item: it carries `class="db-pagination-item"`,
  its own `data-size`, a `data-page` with the page number and a
  `data-pagination-item` attribute. `data-page` is what the component reads back to
  know which page was activated, and `data-pagination-item` drives the collapsing
  described below. In the framework packages this markup comes from
  `DBPaginationItem`, which is documented together with `DBPagination`.
- Previous and next sit in a pagination item as well, so the box and the pointer
  target come from one place, but they carry neither `data-page` nor
  `data-pagination-item`. That is what keeps them out of the collapsing and out of
  the page handling: they are icon buttons, the same split the Figma component set
  makes, and they belong to every layout.
- `data-variant` and `data-size` belong on the `<li>` and nowhere else. The item
  styles its control from there, so the control itself needs no state attributes and
  no `db-button` class - it is a plain `<button>` or `<a>`. The active page is
  `filled`, every other page is `ghost`, and the item uses the attribute rather than
  `aria-current` as its styling hook, because `aria-current` sits on the control.
- `filled` marks the current page, so it has no hover and no pressed background on
  purpose: the page you are already on is not somewhere to go.
- An arrow declares `data-icon` and nothing further. The item hides the label text
  and centres the glyph off that attribute alone.

```html index.html
<nav class="db-pagination" data-size="medium" aria-label="Pagination">
	<ul>
		<li class="db-pagination-item" data-size="medium" data-variant="ghost">
			<button
				class="db-pagination-previous"
				type="button"
				data-icon="chevron_left"
				aria-label="Previous page"
			>
				Previous page
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-page="1"
			data-size="medium"
			data-variant="ghost"
		>
			<button
				class="db-pagination-page"
				type="button"
				aria-label="Page 1 of 10"
			>
				1
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="sibling"
			data-page="4"
			data-size="medium"
			data-variant="ghost"
			data-ellipsis-wide="before"
		>
			<button
				class="db-pagination-page"
				type="button"
				aria-label="Page 4 of 10"
			>
				4
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-page="5"
			data-size="medium"
			data-variant="filled"
			data-ellipsis-collapsed="before"
		>
			<button
				class="db-pagination-page"
				type="button"
				aria-current="page"
				aria-label="Page 5 of 10"
			>
				5
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="sibling"
			data-page="6"
			data-size="medium"
			data-variant="ghost"
		>
			<button
				class="db-pagination-page"
				type="button"
				aria-label="Page 6 of 10"
			>
				6
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-page="10"
			data-size="medium"
			data-variant="ghost"
			data-ellipsis-wide="before"
			data-ellipsis-collapsed="before"
		>
			<button
				class="db-pagination-page"
				type="button"
				aria-label="Page 10 of 10"
			>
				10
			</button>
		</li>
		<li class="db-pagination-item" data-size="medium" data-variant="ghost">
			<button
				class="db-pagination-next"
				type="button"
				data-icon="chevron_right"
				aria-label="Next page"
			>
				Next page
			</button>
		</li>
	</ul>
</nav>
```

Use `data-size="small"` on the `<nav>` for the small variant, and set the same
value on every button inside it. The previous and next buttons carry the size of
the pagination, not a fixed one, so they stay as wide as the page buttons next to
them. Disable the previous button on the first and the next button on the last
page with the native `disabled` attribute.

### Collapsing on narrow viewports

Below the `sm` breakpoint the page list collapses: the pages next to the current
page give way, so only the boundary pages and the current page remain. Both layouts
live in the same markup, which is why the list carries more items than any single
layout shows.

Which pages are shown is one attribute:

| `data-pagination-item` | Rendered                  | Meaning                                                       |
| ---------------------- | ------------------------- | ------------------------------------------------------------- |
| `page`                 | always                    | Boundary page, current page, or a page closing a one-page gap |
| `sibling`              | only above the breakpoint | Page next to the current one                                  |

Where the gaps are is two more, one per layout. Each takes `before`, `after` or
`both`, and the marker is drawn by the page it belongs to:

| Attribute                 | Applies                   |
| ------------------------- | ------------------------- |
| `data-ellipsis-wide`      | only above the breakpoint |
| `data-ellipsis-collapsed` | only below the breakpoint |

The reason there are two is that a marker inherits the visibility of the page that
carries it. A gap the wide layout opens in front of a sibling would disappear
together with that sibling when the list collapses, so the collapsed layout marks
the next page it actually shows instead.

Two rules decide the markers, and each layout has to satisfy them on its own:
between two rendered pages that are not consecutive stands exactly one marker, and
no marker stands in for a single page - that page is rendered instead. The example
above therefore collapses to `1 ... 5 ... 10`, while a list of seven pages that
needs no marker at all in the wide layout needs two collapsed markers to collapse
to `1 ... 4 ... 7`.

The two layouts are not the same calculation with different numbers. The wide one
keeps the number of rendered items constant, so it pads the row towards the
opposite border when the current page sits at one end - that is why page 10 of 10
shows `1 ... 6 7 8 9 10`. The collapsed one gives that up, because width is the
reason it exists: it renders one page at each end, the current page, and nothing
else, so the same list collapses to `1 ... 10`.

One page per end, not `boundaryCount` of them: the collapsed layout ignores
`boundaryCount` above one for the same reason it ignores `siblingCount`. With
`boundaryCount 2` and 20 pages, four pinned pages plus the current one need 360px
and wrap into a second row next to the two arrows, where one page per end needs
272px and fits.

Writing the markup by hand means working out both: the wide list from
`currentPage`, `siblingCount` and `boundaryCount`, the collapsed list from
`currentPage` and the first and last page alone, and then marking up the
difference. In both lists a gap of exactly one page is rendered as that page
instead of a marker.

### Page links

Pages can be anchors instead of buttons. That makes the pagination deep linkable,
shareable and usable without JavaScript, which is the reason to prefer it whenever
the page is server rendered.

The item styles `<a>` and `<button>` through one rule and resets `text-decoration`,
so both look identical. Swap the element, keep the class, add the `href` and drop
`type="button"` - the `<li>` is untouched, since it is what carries the state:

```html index.html
<li
	class="db-pagination-item"
	data-pagination-item="sibling"
	data-page="4"
	data-size="medium"
	data-variant="ghost"
>
	<a class="db-pagination-page" href="?page=4" aria-label="Page 4 of 10">
		4
	</a>
</li>
```

**The current page stays a `<button>`.** It is not somewhere to go, so it gets no
`href` - a link to the page one is already on promises a change and delivers none.
It keeps its place in the tab order because it is the element that carries
`aria-current="page"`, and it stops signalling that it leads somewhere: no pointer
cursor, no hover and no pressed background. The ARIA APG treats the last breadcrumb
item the same way.

Previous and next additionally take `rel="prev"` and `rel="next"`. Google dropped
them as an indexing signal in 2019, but they remain valid HTML, describe the
sequential relationship and help browsers prefetch:

```html index.html
<li class="db-pagination-item" data-size="medium" data-variant="ghost">
	<a
		class="db-pagination-previous"
		href="?page=4"
		rel="prev"
		data-icon="chevron_left"
		aria-label="Previous page"
	>
		Previous page
	</a>
</li>
```

**At the boundaries, keep the `<button disabled>`.** On the first page there is no
previous page to link to, and an anchor that leads nowhere would need
`aria-disabled="true"` plus `tabindex="-1"` to be inert - announced as a link that
cannot be followed. The native disabled button says what it is, needs no ARIA and
looks the same. So the first and last page mix element types in one list, and the
`rel` attribute disappears together with the anchor.

The markers never become links, because they are pseudo elements of a page rather
than elements of their own. They stay out of the accessibility tree through the
alternative text syntax, `content: "..." / ""`, which gives generated content an
empty accessible name. The plain `content: "..."` in front of it is the fallback:
where the syntax is not understood the whole declaration would be dropped and the
dots would vanish, so the first line keeps them visible at the price of being
announced.
