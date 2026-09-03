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

### Page links

With `href-pattern` the pages render as anchors instead of buttons. `{page}` is
replaced with the page number, so the pagination becomes deep linkable, shareable
and usable without JavaScript.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPagination } from "@db-ux/v-core-components";
</script>

<template>
	<DBPagination
		:current-page="currentPage"
		:total-count="100"
		:page-size="10"
		href-pattern="?page={page}"
	/>
</template>
```

The component does **not** call `preventDefault`, otherwise the plain href usage
would be broken. `page-change` is still emitted, so it can be combined with
`href-pattern` to keep local state in sync.

For Vue Router, intercept the click on a wrapper element and read the `href` from
the anchor; the emitted payload is the page number only.
