## Vue

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. It is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Its `copyright` text is optional.

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBFooterMeta } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter>
		<DBFooterMeta copyright="© Example Company">
			<nav aria-label="Legal navigation">...</nav>
		</DBFooterMeta>
	</DBFooter>
</template>
```
