<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

We try to set `areaPopup` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set `areaPopup` with `true/false` for sub-navigation or link

```vue App.vue
<!-- App.vue -->
<script>
import { DBNavigationItem } from "@db-ux/v-core-components";
</script>

<template>
	<!-- Only link	-->
	<DBNavigationItem>
		<router-link to="mypath">NavigationItem</router-link>
	</DBNavigationItem>

	<!-- With Sub-Navigation -->
	<DBNavigationItem>
		<template #subnavigation>
			<DBNavigationItem>
				<router-link to="mypath">Sub-Navi-Item 1</router-link>
			</DBNavigationItem>
			<DBNavigationItem>
				<router-link to="mypath">Sub-Navi-Item 2</router-link>
			</DBNavigationItem>
		</template>
		Navi-Item 1
	</DBNavigationItem>
</template>
```
