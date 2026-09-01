## Vue

For general installation and configuration look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

#### With Slots

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordion, DBAccordionItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBAccordion>
		<DBAccordionItem>
			<template v-slot:headline>Title</template>
			Content
		</DBAccordionItem>
	</DBAccordion>
</template>
```

#### With attributes

```vue App.vue
<!-- App.vue -->
<script>
import { DBAccordion, DBAccordionItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBAccordion>
		<DBAccordionItem headline="Title" content="Content"></DBAccordionItem>
	</DBAccordion>
</template>
```
