## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBTabPanel,
	DBTabs,
	DBTabList,
	DBTabItem
} from "@db-ux/v-core-components";
</script>

<template>
	<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>
</template>
```
