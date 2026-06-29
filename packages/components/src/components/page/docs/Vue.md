## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPage, DBHeader } from "@db-ux/v-core-components";
</script>

<template>
	<DBPage>
		<DBHeader slot="header">...</DBHeader>
		<main class="db-main">Main Page</main>
	</DBPage>
</template>
```
