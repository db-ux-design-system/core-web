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
