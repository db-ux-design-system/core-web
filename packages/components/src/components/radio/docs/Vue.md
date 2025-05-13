## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBRadio } from "@db-ux/v-core-components";
import { _ref } from "vue";
const radio = _ref("");

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
