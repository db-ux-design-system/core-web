## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Overview

`DBBreadcrumbItem` is used as a child component of `DBBreadcrumb` to create individual breadcrumb items. This provides more flexibility than using the `items` prop, especially when you need custom content or dynamic behavior.

**Note**: For most use cases, using the `items` prop on `DBBreadcrumb` is simpler and supports all features including collapse functionality. Use child components when you need more control over rendering.

### Basic Usage

```tsx App.tsx
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

### With Text Property

You can use the `text` property instead of child content:

```tsx
<DBBreadcrumb>
	<DBBreadcrumbItem href="/" text="Home" />
	<DBBreadcrumbItem href="/category" text="Category" />
	<DBBreadcrumbItem text="Current Page" ariaCurrent="page" />
</DBBreadcrumb>
```

### With Icons

Add icons to breadcrumb items:

```tsx
<DBBreadcrumb>
	<DBBreadcrumbItem href="/" icon="home">
		Home
	</DBBreadcrumbItem>
	<DBBreadcrumbItem href="/category" icon="folder">
		Category
	</DBBreadcrumbItem>
	<DBBreadcrumbItem ariaCurrent="page">Current Page</DBBreadcrumbItem>
</DBBreadcrumb>
```

### Disabled Item

Disable breadcrumb items to render them as spans instead of links:

```tsx
<DBBreadcrumb>
	<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
	<DBBreadcrumbItem disabled>Disabled Item</DBBreadcrumbItem>
	<DBBreadcrumbItem ariaCurrent="page">Current Page</DBBreadcrumbItem>
</DBBreadcrumb>
```

### Dynamic Content

Use child components for dynamic or complex content:

```tsx
const breadcrumbPath = [
	{ url: "/products", label: "Products" },
	{ url: "/products/electronics", label: "Electronics" }
];

const App = () => (
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		{breadcrumbPath.map((item) => (
			<DBBreadcrumbItem key={item.url} href={item.url}>
				{item.label}
			</DBBreadcrumbItem>
		))}
		<DBBreadcrumbItem ariaCurrent="page">Laptops</DBBreadcrumbItem>
	</DBBreadcrumb>
);
```

### All Available Properties

- **href**: The URL the breadcrumb item links to
- **text**: The text content of the breadcrumb item (alternative to using children)
- **icon**: Icon name from DB UX icon library
- **ariaCurrent**: Indicates the current page (typically `"page"` for the last item)
- **disabled**: When `true`, renders as a span instead of a link
- **id**: Custom ID for the element
- **className**: Additional CSS classes
