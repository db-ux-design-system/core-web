## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTabPanel, DBTabs, DBTabList, DBTab } from "@db-ui/v-components";
</script>

<template>
	<DBTabs>
		<DBTabList>
			<DBTab>Tab 1</DBTab>
			<DBTab>Tab 2</DBTab>
			<DBTab>Tab 3</DBTab>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>
</template>
```
