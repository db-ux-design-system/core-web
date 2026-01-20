## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Usage Patterns

There are two ways to use the breadcrumb component:

1. **Using the `items` prop** (recommended): Pass an array of breadcrumb items
2. **Using child components**: Use `<DBBreadcrumbItem>` components as children

### Basic Usage with Items Array (Recommended)

The `items` prop provides a declarative way to define breadcrumbs and supports all features including collapse functionality.

```tsx App.tsx
import { DBBreadcrumb } from "@db-ux/react-core-components";

const items = [
	{ href: "/", text: "Home" },
	{ href: "/category", text: "Category" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];

const App = () => <DBBreadcrumb items={items} ariaLabel="Breadcrumb" />;

export default App;
```

### Using Child Components

Alternatively, use `<DBBreadcrumbItem>` components for more flexibility:

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

### With Icons

Add icons to breadcrumb items using the `icon` property:

```tsx
const items = [
	{ href: "/", text: "Home", icon: "home" },
	{ href: "/category", text: "Category", icon: "folder" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];

<DBBreadcrumb items={items} />;
```

### Size Options

Control the size of breadcrumb items:

```tsx
{
	/* Small size (default) */
}
<DBBreadcrumb items={items} size="small" />;

{
	/* Medium size */
}
<DBBreadcrumb items={items} size="medium" />;
```

### Separator Options

Choose between different separators:

```tsx
{
	/* Chevron separator (default) */
}
<DBBreadcrumb items={items} separator="chevron" />;

{
	/* Slash separator */
}
<DBBreadcrumb items={items} separator="slash" />;
```

### Collapse Long Breadcrumbs

Use `maxItems` to collapse breadcrumbs when they exceed a certain length. The first item and last items are shown, with an ellipsis button in between:

```tsx
const items = [
	{ href: "/", text: "Home" },
	{ href: "/level1", text: "Level 1" },
	{ href: "/level2", text: "Level 2" },
	{ href: "/level3", text: "Level 3" },
	{ href: "/level4", text: "Level 4" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];

// Shows: Home > … > Level 4 > Current Page
// Clicking the ellipsis expands to show all items
<DBBreadcrumb
	items={items}
	maxItems={3}
	ellipsisAriaLabel="Expand to show all breadcrumb items"
/>;
```
