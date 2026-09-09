## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@db-ux/v-core-components";
</script>

<template>
	<!-- Simple link item -->
	<DBControlPanelNavigationItem>
		<router-link to="mypath">NavigationItem</router-link>
	</DBControlPanelNavigationItem>

	<!-- With Sub-Navigation (use DBControlPanelNavigationItemGroup) -->
	<DBControlPanelNavigationItemGroup text="Navi-Group 1">
		<DBControlPanelNavigationItem>
			<router-link to="mypath">Sub-Navi-Item 1</router-link>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<router-link to="mypath">Sub-Navi-Item 2</router-link>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigationItemGroup>
</template>
```
