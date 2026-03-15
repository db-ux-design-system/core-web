## HTML

For general installation and configuration take a look at the [wc-core-components](https://www.npmjs.com/package/@db-ux/wc-core-components) package.

### Usage Patterns

There are two ways to use the breadcrumb component:

1. **Using the `items` attribute** (recommended): Pass a JSON array of breadcrumb items
2. **Using child components**: Use `<db-breadcrumb-item>` elements as children

### Basic Usage with Items Attribute (Recommended)

The `items` attribute provides a declarative way to define breadcrumbs and supports all features including collapse functionality.

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>DBBreadcrumb</title>
		<script
			type="module"
			src="https://unpkg.com/@db-ux/wc-core-components@latest/dist/db-ux/db-ux.esm.js"
		></script>
	</head>
	<body>
		<db-breadcrumb
			items='[{"href":"/","text":"Home"},{"href":"/category","text":"Category"},{"text":"Current Page","ariaCurrent":"page"}]'
			aria-label="Breadcrumb"
		></db-breadcrumb>
	</body>
</html>
```

### Using Child Components

Alternatively, use `<db-breadcrumb-item>` elements for more flexibility:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
	<db-breadcrumb-item href="/category">Category</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page"> Current Page </db-breadcrumb-item>
</db-breadcrumb>
```

### With Icons

Add icons to breadcrumb items using the `icon` property:

```html
<db-breadcrumb
	items='[{"href":"/","text":"Home","icon":"home"},{"href":"/category","text":"Category","icon":"folder"},{"text":"Current Page","ariaCurrent":"page"}]'
></db-breadcrumb>
```

Or with child components:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/" icon="home">Home</db-breadcrumb-item>
	<db-breadcrumb-item href="/category" icon="folder">
		Category
	</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```

### Size Options

Control the size of breadcrumb items:

```html
<!-- Small size (default) -->
<db-breadcrumb items="[...]" size="small"></db-breadcrumb>

<!-- Medium size -->
<db-breadcrumb items="[...]" size="medium"></db-breadcrumb>
```

### Separator Options

Choose between different separators:

```html
<!-- Chevron separator (default) -->
<db-breadcrumb items="[...]" separator="chevron"></db-breadcrumb>

<!-- Slash separator -->
<db-breadcrumb items="[...]" separator="slash"></db-breadcrumb>
```

### Collapse Long Breadcrumbs

Use `max-items` to collapse breadcrumbs when they exceed a certain length. The first item and last items are shown, with an ellipsis button in between:

```html
<!-- Shows: Home > … > Level 4 > Current Page -->
<!-- Clicking the ellipsis expands to show all items -->
<db-breadcrumb
	items='[{"href":"/","text":"Home"},{"href":"/level1","text":"Level 1"},{"href":"/level2","text":"Level 2"},{"href":"/level3","text":"Level 3"},{"href":"/level4","text":"Level 4"},{"text":"Current Page","ariaCurrent":"page"}]'
	max-items="3"
	ellipsis-aria-label="Expand to show all breadcrumb items"
></db-breadcrumb>
```

### Using Plain HTML/CSS

If you prefer not to use web components, you can use the plain CSS classes:

```html
<nav class="db-breadcrumb" aria-label="breadcrumb">
	<ol class="db-breadcrumb-list">
		<li><a href="/">Home</a></li>
		<li><a href="/category">Category</a></li>
		<li aria-current="page">Current Page</li>
	</ol>
</nav>
```

```scss app.scss
@forward "@db-ux/core-components/build/styles/relative";
```
