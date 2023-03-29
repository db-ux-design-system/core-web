## Vue

Load SCSS globally in a `index.scss` file and import it in your `main.ts`/`main.js` file in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
```

Use component:

```vue
<script>
import { DBCard } from '@db-ui/v-components';
</script>

<template>
  <DBCard>Card content</DBCard>
</template>
```
