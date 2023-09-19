---
to: "<%= readme ? `src/components/${name}/docs/Vue.md` : null %>"
---
## Vue

For general installation and configuration take a look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import { DB<%= h.changeCase.pascal(name) %> } from "@db-ui/v-components";
</script>

<template>
	<DB<%= h.changeCase.pascal(name) %>><%= h.changeCase.pascal(name) %></DB<%= h.changeCase.pascal(name) %>>
</template>
```


