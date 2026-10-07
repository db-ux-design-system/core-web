## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBBreadcrumb aria-label="Breadcrumb">
		<DBBreadcrumbItem>
			<a href="/">Home</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/section">Section</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/section/page" aria-current="page">Page</a>
		</DBBreadcrumbItem>
	</DBBreadcrumb>
</template>
```
