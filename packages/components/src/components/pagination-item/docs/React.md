## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

`DBPaginationItem` is a sub-component of `DBPagination`, which renders one item per
page and one per truncation. Use it directly only when you build a pagination
yourself and want the item appearance and semantics of the design system.

```tsx App.tsx
import { DBPaginationItem } from "@db-ux/react-core-components";

const App = () => (
	<nav className="db-pagination" aria-label="Pagination">
		<ul>
			<DBPaginationItem
				page={1}
				label="Page 1 of 2"
				onClick={() => console.log("page 1")}
			/>
			<DBPaginationItem
				page={2}
				active
				label="Page 2 of 2"
				onClick={() => console.log("page 2")}
			/>
		</ul>
	</nav>
);

export default App;
```

Leave `page` out to render the truncation item. Pass `href` to render an anchor
instead of a button, and `layout` to place the item in one of the two responsive
layouts.
