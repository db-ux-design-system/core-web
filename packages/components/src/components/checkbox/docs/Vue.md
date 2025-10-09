## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBCheckbox } from "@db-ux/v-core-components";
import { _ref } from "vue";
const checkbox = _ref("");
</script>

<template>
	<DBCheckbox @change="checkbox = $event.target.checked" name="checkbox">
		Checkbox
	</DBCheckbox>
</template>
```

#### Adding Formatted Infotext

The message prop of the DBCheckbox does not accept HTML content for security reasons (to prevent XSS attacks). To add a richly formatted description, use the DBInfotext component as a sibling element. You must link both components using the [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-HTML-attribute to ensure accessibility.

```vue App.vue
<script setup lang="ts">
import { DBCheckbox, DBInfotext } from "@db-ux/v-core-components";
</script>

<template>
	<DBCheckbox aria-describedby="checkbox-message">
		Example Checkbox
	</DBCheckbox>

	<DBInfotext id="checkbox-message">
		Example <strong>Text</strong>
	</DBInfotext>
</template>
```
