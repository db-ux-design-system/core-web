## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTag } from "@db-ux/v-core-components";
</script>

<template>
	<DBTag><button type="button">Tag as Button</button></DBTag>
	<DBTag>
		<a href="#"> Tag as Link </a>
	</DBTag>
	<DBTag
		><label for="checkbox01"
			><input id="checkbox01" type="checkbox" />Tag as Checkbox</label
		></DBTag
	>
	<DBTag
		><label for="radio01"
			><input name="radio01" id="radio01" type="radio" />Tag as
			Radio</label
		></DBTag
	>
	<DBTag>Static Tag</DBTag>
	<DBTag :overflow="true">
		<span>Static Tag with overflow</span>
	</DBTag>
</template>
```
