## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTag } from "@db-ux/v-core-components";
</script>

<template>
	<DBTag><DBButton>Tag as Button</DBButton></DBTag>
	<DBTag>
		<DBLink> Tag as Link </DBLink>
	</DBTag>
	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>
	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>
	<DBTag>Static Tag</DBTag>
	<DBTag :overflow="true">
		<span>Static Tag with overflow</span>
	</DBTag>
</template>
```
