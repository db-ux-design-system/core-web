## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBRadio } from "@db-ux/v-core-components";
import { ref } from "vue";
const radio = ref("");

const radioNames = ["X", "Y", "Z"];
</script>

<template>
	<fieldset>
		<legend>Radio group example</legend>
		<DBRadio
			v-for="radioName in radioNames"
			:key="radioName"
			@change="radio = radioName"
			name="radio-group"
			:value="radioName"
			:checked="radio === radioName"
		>
			Radio {{ radioName }}
		</DBRadio>
	</fieldset>
</template>
```
