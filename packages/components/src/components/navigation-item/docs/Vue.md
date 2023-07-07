## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DBNavigationItem } from "@db-ui/v-components";
</script>

<template>
	<router-link to="mypath">
		<DBNavigationItem>NavigationItem</DBNavigationItem>
	</router-link>
</template>
```
