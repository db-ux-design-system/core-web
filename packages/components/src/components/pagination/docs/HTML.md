## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

The CSS package provides the Pagination styles. Keep the active page and the
button behavior synchronized with your application state.

```html index.html
<nav class="db-pagination" data-size="medium" aria-label="Pagination">
	<ul>
		<li>
			<button
				class="db-button db-pagination-previous"
				data-variant="ghost"
				data-size="small"
				type="button"
				disabled
			>
				Previous page
			</button>
		</li>
		<li>
			<button
				class="db-button db-pagination-page"
				data-variant="filled"
				type="button"
				aria-current="page"
			>
				1
			</button>
		</li>
		<li>
			<button
				class="db-button db-pagination-page"
				data-variant="ghost"
				type="button"
			>
				2
			</button>
		</li>
		<li>
			<button
				class="db-button db-pagination-next"
				data-variant="ghost"
				data-size="small"
				type="button"
			>
				Next page
			</button>
		</li>
	</ul>
</nav>
```
