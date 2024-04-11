## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordion, DBAccordionItem } from "@db-ui/v-components";
</script>

<template>
	<DBAccordion>
		<DBAccordionItem headlinePlain="Item 1" content="Content 1" />
		<DBAccordionItem headlinePlain="Item 2" content="Content 2" />
		<DBAccordionItem headlinePlain="Item 3" content="Content 3" />
	</DBAccordion>
</template>
```
