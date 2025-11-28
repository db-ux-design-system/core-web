## HTML

For general installation and configuration take a look at the [wc-core-components](https://www.npmjs.com/package/@db-ux/wc-core-components) package.

### Use component

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
			<db-breadcrumb-item aria-current="page"
				>Current Page</db-breadcrumb-item
			>
		</db-breadcrumb>
	</body>
</html>
```

### With text attribute

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

### Disabled item

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
	<db-breadcrumb-item disabled>Disabled Item</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```
