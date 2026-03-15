## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Usage Patterns

There are two ways to use the breadcrumb component:

1. **Using the `items` prop** (recommended): Pass an array of breadcrumb items
2. **Using child components**: Use `<DBBreadcrumbItem>` components as children

### Basic Usage with Items Array (Recommended)

The `items` prop provides a declarative way to define breadcrumbs and supports all features including collapse functionality.

```vue App.vue
<template>
	<DBBreadcrumb :items="items" aria-label="Breadcrumb" />
</template>

<script setup lang="ts">
import { DBBreadcrumb } from "@db-ux/v-core-components";

const items = [
	{ href: "/", text: "Home" },
	{ href: "/category", text: "Category" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];
</script>
```

### Using Child Components

Alternatively, use `<DBBreadcrumbItem>` components for more flexibility:

```vue App.vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page"> Current Page </DBBreadcrumbItem>
	</DBBreadcrumb>
</template>

<script setup lang="ts">
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/v-core-components";
</script>
```

### With Icons

Add icons to breadcrumb items using the `icon` property:

```vue
<script setup lang="ts">
const items = [
	{ href: "/", text: "Home", icon: "home" },
	{ href: "/category", text: "Category", icon: "folder" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];
</script>

<template>
	<DBBreadcrumb :items="items" />
</template>
```

### Size Options

Control the size of breadcrumb items:

```vue
<template>
	<!-- Small size (default) -->
	<DBBreadcrumb :items="items" size="small" />

	<!-- Medium size -->
	<DBBreadcrumb :items="items" size="medium" />
</template>
```

### Separator Options

Choose between different separators:

```vue
<template>
	<!-- Chevron separator (default) -->
	<DBBreadcrumb :items="items" separator="chevron" />

	<!-- Slash separator -->
	<DBBreadcrumb :items="items" separator="slash" />
</template>
```

### Collapse Long Breadcrumbs

Use `maxItems` to collapse breadcrumbs when they exceed a certain length. The first item and last items are shown, with an ellipsis button in between:

```vue
<script setup lang="ts">
const items = [
	{ href: "/", text: "Home" },
	{ href: "/level1", text: "Level 1" },
	{ href: "/level2", text: "Level 2" },
	{ href: "/level3", text: "Level 3" },
	{ href: "/level4", text: "Level 4" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];
</script>

<template>
	<!-- Shows: Home > … > Level 4 > Current Page -->
	<!-- Clicking the ellipsis expands to show all items -->
	<DBBreadcrumb
		:items="items"
		:maxItems="3"
		ellipsisAriaLabel="Expand to show all breadcrumb items"
	/>
</template>
```
