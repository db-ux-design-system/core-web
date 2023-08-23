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
		<template v-slot:title>Title</template>
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
	<DBAccordionItem title="Title" content="Content"></DBAccordionItem>
</template>
```
