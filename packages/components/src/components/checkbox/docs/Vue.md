<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBCheckbox } from "@db-ux/v-core-components";
import { _ref } from "vue";
const checkbox = _ref("");
</script>

<template>
	<DBCheckbox @change="checkbox = $event.target.checked" name="checkbox">
		Checkbox
	</DBCheckbox>
</template>
```
