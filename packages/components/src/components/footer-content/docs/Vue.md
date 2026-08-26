## Vue

`DBFooterContent` provides the primary visual area and is intended for use inside `DBFooter`.

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBFooterContent } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter>
		<DBFooterContent>
			<nav aria-label="Footer navigation">...</nav>
		</DBFooterContent>
	</DBFooter>
</template>
```
