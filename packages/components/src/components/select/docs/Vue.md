## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBSelect } from "@db-ui/v-components";
</script>

<template>
	<DBSelect>
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
	</DBSelect>
</template>
```
