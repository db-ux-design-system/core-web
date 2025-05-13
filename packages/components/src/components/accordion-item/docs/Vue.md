## Vue

For general installation and configuration look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

#### With Slots

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordionItem } from "@db-ux/v-core-components";
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
import { DBAccordionItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBAccordionItem headline="Title" content="Content"></DBAccordionItem>
</template>
```
