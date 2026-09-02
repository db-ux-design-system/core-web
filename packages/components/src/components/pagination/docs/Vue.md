## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

`DBPagination` is controlled. Update `currentPage` when `page-change` is emitted.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { DBPagination } from "@db-ux/v-core-components";

const currentPage = ref(1);
</script>

<template>
	<DBPagination
		:current-page="currentPage"
		:total-count="100"
		:page-size="10"
		@page-change="currentPage = $event"
	/>
</template>
```
