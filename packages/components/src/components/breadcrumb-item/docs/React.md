## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/react-core-components";

const App = () => (
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
		<DBBreadcrumbItem ariaCurrent="page">Current Page</DBBreadcrumbItem>
	</DBBreadcrumb>
);

export default App;
```

### With text prop

```tsx
<DBBreadcrumb>
	<DBBreadcrumbItem href="/" text="Home" />
	<DBBreadcrumbItem href="/category" text="Category" />
	<DBBreadcrumbItem text="Current Page" ariaCurrent="page" />
</DBBreadcrumb>
```

### Disabled item

```tsx
<DBBreadcrumb>
	<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
	<DBBreadcrumbItem disabled>Disabled Item</DBBreadcrumbItem>
	<DBBreadcrumbItem ariaCurrent="page">Current Page</DBBreadcrumbItem>
</DBBreadcrumb>
```
