## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<template>
	<DBBreadcrumb>
		<li><a href="#">Home</a></li>
		<li><a href="#">Category</a></li>
		<li aria-current="page">Current Page</li>
	</DBBreadcrumb>
</template>

<script setup lang="ts">
import { DBBreadcrumb } from "@db-ux/v-core-components";
</script>
```
