## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<script setup lang="ts">
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page">Current Page</DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```

### With text prop

```vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/" text="Home" />
		<DBBreadcrumbItem href="/category" text="Category" />
		<DBBreadcrumbItem text="Current Page" aria-current="page" />
	</DBBreadcrumb>
</template>
```

### Disabled item

```vue
<template>
	<DBBreadcrumb>
		<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem :disabled="true">Disabled Item</DBBreadcrumbItem>
		<DBBreadcrumbItem aria-current="page">Current Page</DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```
