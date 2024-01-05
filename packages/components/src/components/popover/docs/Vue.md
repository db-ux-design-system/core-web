## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPopover, DBButton } from "@db-ui/v-components";
</script>

<template>
	<DBButton describedbyid="popover-01" type="button">
		Hover on me to open Popover
		<DBPopover id="popover-01">Popover</DBPopover>
	</DBButton>
</template>
```
