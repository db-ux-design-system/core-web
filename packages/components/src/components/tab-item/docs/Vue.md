<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTabPanel, DBTabs, DBTabList, DBTabItem } from "@db-ui/v-components";
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
