## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The CSS package provides the Pagination styles. Keep the active page and the
button behavior synchronized with your application state.

Three things are easy to miss when writing the markup by hand:

- The previous/next buttons are icon-only. They need `data-icon` together with
  `data-no-text="true"`; the text stays in the DOM as the accessible name.
- Every page button needs an `aria-label` that names the page in context
  (`Page 5 of 10`), because the visible text is only a bare number. The active
  page additionally carries `aria-current="page"`.
- Skipped page ranges are rendered as an `<li>` with
  `class="db-pagination-ellipsis"` and `aria-hidden="true"`, so assistive
  technology is not read a decorative separator.
- Every page and ellipsis `<li>` is a pagination item: it carries
  `class="db-pagination-item"`, its own `data-size` and a `data-pagination-item`
  attribute. The last one drives the collapsing described below and is the only
  part of the markup that cannot be read off the rendered result. In the framework
  packages this markup comes from `DBPaginationItem`, which is documented together
  with `DBPagination`.
- The previous and next buttons are not pagination items. They are icon buttons,
  the same split the Figma component set makes, and they are part of every layout.

```html index.html
<nav class="db-pagination" data-size="medium" aria-label="Pagination">
	<ul>
		<li>
			<button
				class="db-button db-pagination-previous"
				type="button"
				data-icon="chevron_left"
				data-no-text="true"
				data-size="medium"
				data-variant="ghost"
				aria-label="Previous page"
			>
				Previous page
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-size="medium"
		>
			<button
				class="db-button db-pagination-page"
				type="button"
				data-size="medium"
				data-variant="ghost"
				aria-label="Page 1 of 10"
			>
				1
			</button>
		</li>
		<li
			class="db-pagination-item db-pagination-ellipsis"
			data-pagination-item="ellipsis"
			data-size="medium"
			aria-hidden="true"
		>
			<span>...</span>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="sibling"
			data-size="medium"
		>
			<button
				class="db-button db-pagination-page"
				type="button"
				data-size="medium"
				data-variant="ghost"
				aria-label="Page 4 of 10"
			>
				4
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-size="medium"
		>
			<button
				class="db-button db-pagination-page"
				type="button"
				data-size="medium"
				data-variant="filled"
				aria-current="page"
				aria-label="Page 5 of 10"
			>
				5
			</button>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="sibling"
			data-size="medium"
		>
			<button
				class="db-button db-pagination-page"
				type="button"
				data-size="medium"
				data-variant="ghost"
				aria-label="Page 6 of 10"
			>
				6
			</button>
		</li>
		<li
			class="db-pagination-item db-pagination-ellipsis"
			data-pagination-item="ellipsis"
			data-size="medium"
			aria-hidden="true"
		>
			<span>...</span>
		</li>
		<li
			class="db-pagination-item"
			data-pagination-item="page"
			data-size="medium"
		>
			<button
				class="db-button db-pagination-page"
				type="button"
				data-size="medium"
				data-variant="ghost"
				aria-label="Page 10 of 10"
			>
				10
			</button>
		</li>
		<li>
			<button
				class="db-button db-pagination-next"
				type="button"
				data-icon="chevron_right"
				data-no-text="true"
				data-size="medium"
				data-variant="ghost"
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
page give way, so only the boundary pages, the current page and the ellipses
remain. Both layouts live in the same markup, which is why the list carries more
items than any single layout shows.

| `data-pagination-item` | Rendered                  | Meaning                                                            |
| ---------------------- | ------------------------- | ------------------------------------------------------------------ |
| `page`                 | always                    | Boundary page, current page, or a page closing a one-page gap      |
| `sibling`              | only above the breakpoint | Page next to the current one                                       |
| `ellipsis`             | always                    | Stands in for pages that neither layout shows                      |
| `collapse-ellipsis`    | only below the breakpoint | Stands in for the pages the collapsing removes                     |
| `wide-ellipsis`        | only above the breakpoint | Second ellipsis of a gap the collapsed layout covers with only one |

Two rules decide the values, and each layout has to satisfy them on its own:
between two rendered pages that are not consecutive stands exactly one ellipsis,
and no ellipsis stands in for a single page - that page is rendered instead. The
example above therefore collapses to `1 ... 5 ... 10`, while a list of seven
pages that needs no ellipsis at all in the wide layout needs two
`collapse-ellipsis` items to collapse to `1 ... 4 ... 7`.

The framework components derive this from `currentPage`, `siblingCount` and
`boundaryCount`. Writing the markup by hand means taking it over: work out the
list twice, once with your `siblingCount` and once with `siblingCount` reduced
to `0`, and mark up the difference.

### Page links

Pages can be anchors instead of buttons. That makes the pagination deep linkable,
shareable and usable without JavaScript, which is the reason to prefer it whenever
the page is server rendered.

`set-basic-button` resets `text-decoration` for exactly this case, so an `<a>` with
`class="db-button"` looks identical to the `<button>`. Swap the element, keep every
class and `data-*` attribute, and drop `type="button"`:

```html index.html
<li class="db-pagination-item" data-pagination-item="page" data-size="medium">
	<a
		class="db-button db-pagination-page"
		href="?page=5"
		data-size="medium"
		data-variant="filled"
		aria-current="page"
		aria-label="Page 5 of 10"
	>
		5
	</a>
</li>
```

Previous and next additionally take `rel="prev"` and `rel="next"`. Google dropped
them as an indexing signal in 2019, but they remain valid HTML, describe the
sequential relationship and help browsers prefetch:

```html index.html
<li>
	<a
		class="db-button db-pagination-previous"
		href="?page=4"
		rel="prev"
		data-icon="chevron_left"
		data-no-text="true"
		data-size="medium"
		data-variant="ghost"
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

The ellipses never become links; they stay `<li aria-hidden="true">` with a
`<span>`. The `<span>` cannot be replaced by a pseudo element: Chromium exposes
generated `content` as a text node, so an ellipsis drawn with `::before` would be
announced instead of hidden.
