## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBShell, DBControlPanelDesktop } from "@db-ux/v-core-components";
</script>

<template>
	<DBShell>
		<DBControlPanelDesktop slot="control-panel-desktop"
			>...</DBControlPanelDesktop
		>
		<main class="db-main">Main Shell</main>
	</DBShell>
</template>
```
