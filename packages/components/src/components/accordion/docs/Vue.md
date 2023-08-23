## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordion } from "@db-ui/v-components";
</script>

<template>
	<DBAccordion>
		<DBAccordionItem title="Item 1" content="Content 1" />
		<DBAccordionItem title="Item 2" content="Content 2" />
		<DBAccordionItem title="Item 3" content="Content 3" />
	</DBAccordion>
</template>
```
