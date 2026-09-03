## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

`DBPaginationItem` is a sub-component of [`DBPagination`](../pagination) and is not
meant to be used on its own. `DBPagination` renders one item per page and one per
truncation, so consumers normally never write this markup by hand.

An item is an `<li>` that carries the size and the layout role. The page itself is
a button, or an anchor when the pagination runs in link mode:

```html index.html
<li class="db-pagination-item" data-pagination-item="page" data-size="medium">
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
```

A truncation item adds `db-pagination-ellipsis`, leaves out the page number and is
taken out of the accessibility tree, because the dots are decoration:

```html index.html
<li
	class="db-pagination-item db-pagination-ellipsis"
	data-pagination-item="ellipsis"
	data-size="medium"
	aria-hidden="true"
>
	<span>...</span>
</li>
```

`aria-hidden` on the element is deliberate and cannot be replaced by a
pseudo-element: Chromium exposes generated `content` as a text node, so an
ellipsis drawn with `::before` would be announced.

### Layout roles

`data-pagination-item` decides in which of the two responsive layouts an item is
shown. See the [`DBPagination` documentation](../pagination) for the full table and
the rules that keep the ellipses consistent.

| Value               | Rendered                  |
| ------------------- | ------------------------- |
| `page`              | always                    |
| `sibling`           | only above the breakpoint |
| `ellipsis`          | always                    |
| `collapse-ellipsis` | only below the breakpoint |
| `wide-ellipsis`     | only above the breakpoint |
