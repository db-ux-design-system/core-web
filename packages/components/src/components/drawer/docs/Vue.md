## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { DBDrawer } from "@db-ui/v-components";

const openDrawer = ref<boolean>(false);

const toggleDrawer = (open: boolean) => {
	openDrawer = open;
};
</script>

<template>
	<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">
		My Drawer content
	</DBDrawer>
	<DBButton @click="toggleDrawer(true)">Open me</DBButton>
</template>
```
