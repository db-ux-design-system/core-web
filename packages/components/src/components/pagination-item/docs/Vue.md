## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

`DBPaginationItem` is a sub-component of `DBPagination`, which renders one item per
page and one per truncation. Use it directly only when you build a pagination
yourself and want the item appearance and semantics of the design system.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPaginationItem } from "@db-ux/v-core-components";
</script>

<template>
	<nav class="db-pagination" aria-label="Pagination">
		<ul>
			<DBPaginationItem :page="1" label="Page 1 of 2" />
			<DBPaginationItem :page="2" :active="true" label="Page 2 of 2" />
		</ul>
	</nav>
</template>
```

Leave `page` out to render the truncation item. Pass `href` to render an anchor
instead of a button, and `layout` to place the item in one of the two responsive
layouts.
