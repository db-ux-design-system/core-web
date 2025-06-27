---
force: true
to: src/components/<%= name %>/docs/Vue.md
---
## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DB<%= h.changeCase.pascal(name) %> } from "@db-ux/v-core-components";
</script>

<template>
	<DB<%= h.changeCase.pascal(name) %>><%= h.changeCase.pascal(name) %></DB<%= h.changeCase.pascal(name) %>>
</template>
```


