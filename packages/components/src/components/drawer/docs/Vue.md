## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { _ref } from "vue";
import { DBDrawer } from "@db-ux/v-core-components";

const openDrawer = _ref<boolean>(false);

const toggleDrawer = (open: boolean) => {
	openDrawer.value = open;
};
</script>

<template>
	<DBButton @click="toggleDrawer(true)">Open me</DBButton>
	<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">
		<header v-slot:drawer-header>Optional drawer header</header>
		My Drawer content
	</DBDrawer>
</template>
```
