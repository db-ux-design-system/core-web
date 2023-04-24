## Vue

Load SCSS globally in a `index.scss` file and import it in your `main.ts`/`main.js` file in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

Use component:

```vue
<script>
import { DBInput } from "@db-ui/v-components";
</script>

<template>
	<DBInput
		label="Label"
		placeholder="Placeholder"
		@change="onChange($event)"
	></DBInput>
</template>
```

To get DBInput work with `v-model` you have to use v-model argument syntax:

```typescript
<DBInput
	label="Textlabel"
	placeholder="Start typing"
	v-model:value="value"
></DBInput>
```

or using on-change listener:

```typescript
<DBInput label="Textlabel" placeholder="Start" :value="modelAndChange" @change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
