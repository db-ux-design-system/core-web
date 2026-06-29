## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBCustomSelect } from "@db-ui/v-components";
</script>

<template>
	<DBCustomSelect
		label="Label"
		placeholder="Placeholder"
		:options="[
			{ value: 'Option 1' },
			{ value: 'Option 2' },
			{ value: 'Option 3' },
			{ value: 'Option 4' },
			{ value: 'Option 5' }
		]"
	/>
</template>
```
