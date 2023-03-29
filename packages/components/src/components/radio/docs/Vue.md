## Vue

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;
```

Use component:

```html
<script>
	import { DBRadio } from "@db-ui/v-components";
</script>

<template>
	<DBRadio value="value">Label</DBRadio>
</template>
```

To get DBRadio work with `v-model` you have to use `v-model` argument syntax:

```typescript
<DBRadio v-model:checked="vModelTest">Label</DBRadio>
```

or using on-change listener:

```typescript
<DBRadio
	:value="modelAndChange"
	:on-change="($event) => { modelAndChange = $event.target.value;}"
>Label</DBRadio>
```
