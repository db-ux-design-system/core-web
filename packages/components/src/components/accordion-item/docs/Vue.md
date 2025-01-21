<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

#### With Slots

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordionItem } from "@db-ui/v-components";
</script>

<template>
	<DBAccordionItem>
		<template v-slot:headline>Title</template>
		Content
	</DBAccordionItem>
</template>
```

#### With attributes

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordionItem } from "@db-ui/v-components";
</script>

<template>
	<DBAccordionItem headline="Title" content="Content"></DBAccordionItem>
</template>
```
