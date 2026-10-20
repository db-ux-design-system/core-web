## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/react-core-components";

const App = () => (
	<DBBreadcrumb aria-label="Breadcrumb">
		<DBBreadcrumbItem>
			<a href="/">Home</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/section">Section</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/section/page" aria-current="page">
				Page
			</a>
		</DBBreadcrumbItem>
	</DBBreadcrumb>
);

export default App;
```
