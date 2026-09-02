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

```html index.html
<nav class="db-pagination" data-size="medium" aria-label="Pagination">
	<ul>
		<li>
			<button
				class="db-button db-pagination-previous"
				type="button"
				data-icon="chevron_left"
				data-no-text="true"
				data-size="small"
				data-variant="ghost"
				aria-label="Previous page"
			>
				Previous page
			</button>
		</li>
		<li>
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
		<li class="db-pagination-ellipsis" aria-hidden="true">
			<span>...</span>
		</li>
		<li>
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
		<li>
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
		<li>
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
		<li class="db-pagination-ellipsis" aria-hidden="true">
			<span>...</span>
		</li>
		<li>
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
				data-size="small"
				data-variant="ghost"
				aria-label="Next page"
			>
				Next page
			</button>
		</li>
	</ul>
</nav>
```

Use `data-size="small"` on the `<nav>` for the small variant. Set
`data-size="small"` on the page buttons as well; the previous/next buttons stay
`data-size="small"` in both variants. Disable the previous button on the first
and the next button on the last page with the native `disabled` attribute.
