## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBRadio } from "@db-ui/v-components";
import { ref } from "vue";
const radio = ref("");

const radioNames = ["X", "Y", "Z"];
</script>

<template>
	<ul>
		<li v-for="radioName in radioNames">
			<DBRadio
				@change="radio = radioName"
				name="radio-group"
				:value="radioName"
			>
				Radio {{ radioName }}
			</DBRadio>
		</li>
	</ul>
</template>
```
