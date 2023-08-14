## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBCheckbox } from "@db-ui/v-components";
import { ref } from "vue";
const checkbox = ref("");
</script>

<template>
	<DBCheckbox @change="checkbox = $event.target.checked" name="checkbox">
		Checkbox
	</DBCheckbox>
</template>
```
