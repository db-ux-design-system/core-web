## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBSelect } from "@db-ux/v-core-components";
</script>

<template>
	<DBSelect>
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
		<option value="test3">Test3</option>
		<option value="test4">Test4</option>
		<option value="test5">Test5</option>
	</DBSelect>
</template>
```
