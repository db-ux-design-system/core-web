## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBPage, DBHeader } from "@db-ui/v-components";
</script>

<template>
	<DBPage
		><DBHeader slot="header">...</DBHeader>
		<div>Main Page</div></DBPage
	>
</template>
```
