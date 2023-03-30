## Vue

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Use component:

```

<script>
import { DBLink } from '@db-ui/v-components';
</script>

<template>
  <DBLink variant="primary">Link</DBLink>
</template>

```
