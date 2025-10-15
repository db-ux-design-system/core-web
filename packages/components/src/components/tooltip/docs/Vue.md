## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBTooltip, DBButton } from "@db-ux/v-core-components";
</script>

<template>
	<DBButton aria-describedby="tooltip-01">
		Hover on me to open Tooltip
		<DBTooltip id="tooltip-01">Tooltip</DBTooltip>
	</DBButton>
</template>
```
