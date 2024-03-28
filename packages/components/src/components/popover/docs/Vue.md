## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPopover, DBButton } from "@db-ui/v-components";
</script>

<template>
	<DBPopover>
		<template v-slot:trigger>
			<DBButton> Hover on me to open Popover </DBButton>
		</template>
		Use any html here like e.g. a button:
		<button>Test</button>
	</DBPopover>
</template>
```
