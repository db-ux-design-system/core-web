<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBSelect } from "@db-ux/v-core-components";
</script>

<template>
	<DBSelect>
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
	</DBSelect>
</template>
```
