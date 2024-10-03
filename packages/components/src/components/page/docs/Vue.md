## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPage, DBHeader } from "@db-ui/v-components";
</script>

<template>
	<DBPage>
		<DBHeader slot="header">...</DBHeader>
		<main class="db-main">Main Page</main>
	</DBPage>
</template>
```
