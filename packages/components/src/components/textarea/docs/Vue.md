## Vue

For general installation and configuration look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### General

You cannot use a default value for [textarea in vue](https://vuejs.org/guide/essentials/forms.html#multiline-text).
Use `v-model:value` or `:value` instead with a `_ref("My default value")`.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { _ref } from "vue";
import { DBTextarea } from "@db-ux/v-core-components";

const textarea = _ref("default value");
</script>

<template>
	<DBTextarea
		label="Textarea value"
		placeholder="Placeholder"
		message="Message"
		icon="x_placeholder"
		name="textarevalue-name"
		v-model:value="textarea"
	/>
</template>
```
