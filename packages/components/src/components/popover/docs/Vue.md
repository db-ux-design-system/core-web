## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPopover, DBButton } from "@db-ux/v-core-components";
</script>

<template>
	<DBPopover>
		<template v-slot:trigger>
			<DBButton> Hover on me to open Popover </DBButton>
		</template>
		Use any html code here like e.g. a <code>button</code>:
		<button type="button">Test</button>
	</DBPopover>
</template>
```
