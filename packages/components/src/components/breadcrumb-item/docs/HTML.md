## HTML

For general installation and configuration take a look at the [wc-core-components](https://www.npmjs.com/package/@db-ux/wc-core-components) package.

### Overview

`<db-breadcrumb-item>` is used as a child element of `<db-breadcrumb>` to create individual breadcrumb items. This provides more flexibility than using the `items` attribute, especially when you need custom content or dynamic behavior.

**Note**: For most use cases, using the `items` attribute on `<db-breadcrumb>` is simpler and supports all features including collapse functionality. Use child elements when you need more control over rendering.

### Basic Usage

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>DBBreadcrumbItem</title>
		<script
			type="module"
			src="https://unpkg.com/@db-ux/wc-core-components@latest/dist/db-ux/db-ux.esm.js"
		></script>
	</head>
	<body>
		<db-breadcrumb>
			<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
			<db-breadcrumb-item href="/category">Category</db-breadcrumb-item>
			<db-breadcrumb-item aria-current="page">
				Current Page
			</db-breadcrumb-item>
		</db-breadcrumb>
	</body>
</html>
```

### With Text Attribute

You can use the `text` attribute instead of element content:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/" text="Home"></db-breadcrumb-item>
	<db-breadcrumb-item href="/category" text="Category"></db-breadcrumb-item>
	<db-breadcrumb-item
		text="Current Page"
		aria-current="page"
	></db-breadcrumb-item>
</db-breadcrumb>
```

### With Icons

Add icons to breadcrumb items:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/" icon="home">Home</db-breadcrumb-item>
	<db-breadcrumb-item href="/category" icon="folder">
		Category
	</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```

### Disabled Item

Disable breadcrumb items to render them as spans instead of links:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
	<db-breadcrumb-item disabled>Disabled Item</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```

### Dynamic Content with JavaScript

Use child elements for dynamic content:

```html
<db-breadcrumb id="dynamic-breadcrumb"></db-breadcrumb>

<script>
	const breadcrumbPath = [
		{ url: "/", label: "Home" },
		{ url: "/products", label: "Products" },
		{ url: "/products/electronics", label: "Electronics" }
	];

	const breadcrumb = document.getElementById("dynamic-breadcrumb");

	breadcrumbPath.forEach((item) => {
		const breadcrumbItem = document.createElement("db-breadcrumb-item");
		breadcrumbItem.setAttribute("href", item.url);
		breadcrumbItem.textContent = item.label;
		breadcrumb.appendChild(breadcrumbItem);
	});

	const currentItem = document.createElement("db-breadcrumb-item");
	currentItem.setAttribute("aria-current", "page");
	currentItem.textContent = "Laptops";
	breadcrumb.appendChild(currentItem);
</script>
```

### All Available Attributes

- **href**: The URL the breadcrumb item links to
- **text**: The text content of the breadcrumb item (alternative to using element content)
- **icon**: Icon name from DB UX icon library
- **aria-current**: Indicates the current page (typically `"page"` for the last item)
- **disabled**: When present, renders as a span instead of a link
- **id**: Custom ID for the element
- **class**: Additional CSS classes
