## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

#### Simple

```vue App.vue
<script setup lang="ts">
import { DBFooter } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter>
		<template #main>
			<div>Footer Navigation</div>
		</template>
		<template #meta>
			<div>Legal Links</div>
		</template>
	</DBFooter>
</template>
```

#### With custom content

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBLink } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter>
		<template #main>
			<div>
				<DBLink href="#">About Us</DBLink>
				<DBLink href="#">Contact</DBLink>
				<DBLink href="#">Careers</DBLink>
			</div>
		</template>
		<template #meta>
			<DBLink href="#">Privacy Policy</DBLink>
			<DBLink href="#">Terms of Service</DBLink>
			<DBLink href="#">Imprint</DBLink>
		</template>
	</DBFooter>
</template>
```

#### Without copyright

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBLink } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter :showCopyright="false">
		<template #main>
			<div>Footer Content</div>
		</template>
		<template #meta>
			<DBLink href="#">Privacy</DBLink>
			<DBLink href="#">Legal</DBLink>
		</template>
	</DBFooter>
</template>
```

#### Only meta section

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBLink } from "@db-ux/v-core-components";
</script>

<template>
	<DBFooter :showMain="false">
		<template #meta>
			<DBLink href="#">Privacy</DBLink>
			<DBLink href="#">Imprint</DBLink>
		</template>
	</DBFooter>
</template>
```
