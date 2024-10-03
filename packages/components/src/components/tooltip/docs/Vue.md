## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTooltip, DBButton } from "@db-ui/v-components";
</script>

<template>
	<DBButton describedbyid="tooltip-01">
		Hover on me to open Tooltip
		<DBTooltip id="tooltip-01">Tooltip</DBTooltip>
	</DBButton>
</template>
```
