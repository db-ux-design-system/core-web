## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBHeader, DBBrand } from "@db-ui/v-components";
</script>

<template>
	<DBHeader>
		<DBBrand slot="brand">Header</DBBrand>
	</DBHeader>
</template>
```
