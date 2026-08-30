## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBDialogFooter } from "@db-ux/v-core-components";
</script>

<template>
	<DBDialogFooter>
		<DBButton variant="ghost"> Cancel </DBButton>
		<DBButton variant="brand"> Confirm </DBButton>
	</DBDialogFooter>
</template>
```
