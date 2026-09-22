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

### Disabling a page

Pass an `items` array, one entry per page, to drive the pagination from data instead
of a bare count. It is what lets a single page be disabled - the count API cannot
express that.

```tsx App.tsx
import { DBPagination } from "@db-ux/react-core-components";

const App = () => (
	<DBPagination
		currentPage={1}
		items={[{}, { disabled: true }, {}]}
		onPageChange={(page) => console.log(page)}
	/>
);

export default App;
```

### Composition

Leave `totalCount` and `items` out and pass the items yourself. The pagination then
renders your children instead of computing the page list, which is what lets you bring
a router link. You set nothing on the item: the pagination derives each page from its
position, writes `data-page` onto every `<li>`, marks the current page with
`aria-current` and reports the page by reading `data-page` back, so your child never
gets a handler attached to it.

```tsx App.tsx
import { DBPagination, DBPaginationItem } from "@db-ux/react-core-components";
import { Link } from "react-router-dom";

const App = () => (
	<DBPagination currentPage={2} onPageChange={(page) => console.log(page)}>
		<DBPaginationItem>
			<Link to="/results/1">1</Link>
		</DBPaginationItem>
		<DBPaginationItem>
			<Link to="/results/2">2</Link>
		</DBPaginationItem>
	</DBPagination>
);

export default App;
```

The page identity comes from the item position, so the first item is page 1, the
second page 2, and `currentPage` marks which is current. Previous and next look that
identity up: as buttons they do not report a page themselves, they click the item of
the neighbouring page. So your `<Link>` runs for the arrows too, and the router sees
the same navigation it sees for a direct click. Where that neighbour is not in your
list, the arrow falls back to reporting the page through `onPageChange`.

The numbering is automated: the pagination replaces your link's text with the page
number and moves whatever text you wrote into its `aria-label`, so a `<Link>` reading
`Go to the results` is announced as written and displayed as `2`. Provide an
`aria-label` yourself to override the name. The truncation and the responsive
collapsing are not applied in this mode, because the component cannot know which pages
your children stand for, and the last page is unknown as well, so the next button
stays enabled and an out of range request is yours to ignore.
