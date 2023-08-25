## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### General

You cannot use a default value for [textarea in vue](https://vuejs.org/guide/essentials/forms.html#multiline-text).
Use `v-model:value` or `:value` instead with a `ref("My default value")`.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { DBTextarea } from "@db-ui/v-components";

const textarea = ref("default value");
</script>

<template>
	<DBTextarea
		label="Textarea value"
		placeholder="Placeholder"
		description="Description"
		icon="account"
		name="textarevalue-name"
		v-model:value="textarea"
	/>
</template>
```
