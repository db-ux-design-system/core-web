## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTag } from "@db-ui/v-components";
</script>

<template>
	<DBTag><DBButton>Tag as Button</DBButton></DBTag>
	<DBTag><DBLink>Tag as Link</DBLink></DBTag>
	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>
	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>
	<DBTag><span>Static Tag</span></DBTag>
</template>
```
