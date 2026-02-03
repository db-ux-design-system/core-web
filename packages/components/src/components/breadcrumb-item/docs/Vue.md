## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Overview

`DBBreadcrumbItem` is used as a child component of `DBBreadcrumb` to create individual breadcrumb items. This provides more flexibility than using the `items` prop, especially when you need custom content or dynamic behavior.

**Note**: For most use cases, using the `items` prop on `DBBreadcrumb` is simpler and supports all features including collapse functionality. Use child components when you need more control over rendering.

### Basic Usage

```vue App.vue
<script setup lang="ts">
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page"> Current Page </DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```

### With Text Property

You can use the `text` property instead of child content:

```vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/" text="Home" />
		<DBBreadcrumbItem href="/category" text="Category" />
		<DBBreadcrumbItem text="Current Page" aria-current="page" />
	</DBBreadcrumb>
</template>
```

### With Icons

Add icons to breadcrumb items:

```vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/" icon="home">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="/category" icon="folder">
			Category
		</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page"> Current Page </DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```

### Disabled Item

Disable breadcrumb items to render them as spans instead of links:

```vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem :disabled="true">Disabled Item</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page"> Current Page </DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```

### Dynamic Content

Use child components for dynamic or complex content:

```vue
<script setup lang="ts">
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/v-core-components";

const breadcrumbPath = [
	{ url: "/products", label: "Products" },
	{ url: "/products/electronics", label: "Electronics" }
];

const currentPage = "Laptops";
</script>

<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem
			v-for="item in breadcrumbPath"
			:key="item.url"
			:href="item.url"
		>
			{{ item.label }}
		</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page">
			{{ currentPage }}
		</DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```

### All Available Properties

- **href**: The URL the breadcrumb item links to
- **text**: The text content of the breadcrumb item (alternative to using slot content)
- **icon**: Icon name from DB UX icon library
- **ariaCurrent** / **aria-current**: Indicates the current page (typically `"page"` for the last item)
- **disabled**: When `true`, renders as a span instead of a link
- **id**: Custom ID for the element
- **className**: Additional CSS classes
