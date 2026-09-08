## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

`DBPagination` is controlled. Update `currentPage` when `onPageChange` is called.

```tsx App.tsx
import { useState } from "react";
import { DBPagination } from "@db-ux/react-core-components";

const App = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<DBPagination
			currentPage={currentPage}
			totalCount={100}
			pageSize={10}
			onPageChange={setCurrentPage}
		/>
	);
};

export default App;
```

### Page links

With `hrefPattern` the pages render as anchors instead of buttons. `{page}` is
replaced with the page number, so the pagination becomes deep linkable, shareable
and usable before hydration.

The current page is the exception. It gets no `href`, because a link to the page one
is already on promises a change and delivers none, so it stays a focusable
`<button>` carrying `aria-current="page"` and shows neither a pointer cursor nor a
hover or pressed state.

```tsx App.tsx
import { DBPagination } from "@db-ux/react-core-components";

const App = () => (
	<DBPagination
		currentPage={Number(
			new URLSearchParams(location.search).get("page") ?? 1
		)}
		totalCount={100}
		pageSize={10}
		hrefPattern="?page={page}"
	/>
);

export default App;
```

The component does **not** call `preventDefault`, otherwise the plain href usage
would be broken. `onPageChange` still fires, so it can be combined with
`hrefPattern` to keep local state in sync.

To hand the navigation to a client-side router, intercept the click on a wrapper
instead. The component deliberately exposes no event object; see the Pagination
documentation for the reasoning.

```tsx Router.tsx
<div
	onClick={(event) => {
		const link = (event.target as HTMLElement).closest("a");
		if (link) {
			event.preventDefault();
			navigate(link.getAttribute("href")!);
		}
	}}
>
	<DBPagination
		currentPage={currentPage}
		totalCount={100}
		pageSize={10}
		hrefPattern="?page={page}"
	/>
</div>
```

### Single items

`DBPaginationItem` is the `<li>` that `DBPagination` renders once per page. Use it
directly only when you build the surrounding list yourself and want the item
appearance and semantics of the design system.

```tsx App.tsx
import { DBPaginationItem } from "@db-ux/react-core-components";

const App = () => (
	<nav className="db-pagination" aria-label="Pagination">
		<ul>
			<DBPaginationItem page={1} text="1" label="Page 1 of 2" />
			<DBPaginationItem page={2} text="2" label="Page 2 of 2" active />
		</ul>
	</nav>
);

export default App;
```

`text` is what the item renders. Without it the item renders its children instead, so
an item with neither stays empty. Leave `page` out only for a control that is not a
page, the way `DBPagination` wraps its previous and next buttons - the truncation is
no item at all, it is drawn as a pseudo element on the page that borders the gap.
Pass `href` to render an anchor instead of a button, and `layout` to place the item in
one of the two responsive layouts: `wide` items disappear once the list collapses,
`collapsed` items only appear there, and `always` items are part of both.

### Composition

Leave `totalCount` out and pass the items yourself. The pagination then renders your
children instead of computing the page list, which is what lets you bring a router
link. It still reports the page: it listens on the list and reads `page` back from
the item, so your child never gets a handler attached to it.

```tsx App.tsx
import { DBPagination, DBPaginationItem } from "@db-ux/react-core-components";
import { Link } from "react-router-dom";

const App = () => (
	<DBPagination currentPage={2} onPageChange={(page) => console.log(page)}>
		<DBPaginationItem page={1} label="Page 1 of 2">
			<Link to="/results/1" aria-label="Page 1 of 2">
				1
			</Link>
		</DBPaginationItem>
		<DBPaginationItem page={2} label="Page 2 of 2" active>
			<Link to="/results/2" aria-label="Page 2 of 2">
				2
			</Link>
		</DBPaginationItem>
	</DBPagination>
);

export default App;
```

`page` is required on a composed item: it identifies the item rather than rendering
it, and the pagination reads it back to know which page was activated.

Three things move to you in this mode. The truncation and the responsive collapsing
are not applied, because the component cannot know which pages your children stand
for. `aria-current` falls back to the `<li>`, since a child that you provide cannot be
reached from inside the component - set it on your link as well if you want it where
assistive technology expects it. And the accessible name is yours: `label` is only
used for the control the item renders itself, so without an `aria-label` on your link
it is announced as the bare number. The last page is unknown as well, so the next
button stays enabled and an out of range request is yours to ignore.
