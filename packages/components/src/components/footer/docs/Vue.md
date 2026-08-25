## Vue

For installation and configuration, see [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components).

Use `DBFooter` inside `DBPage variant="fixed"`. The default slot is the main area; the named `meta` slot contains legal and other meta content.

```vue App.vue
<script setup lang="ts">
import { DBFooter, DBLink, DBPage } from "@db-ux/v-core-components";
</script>

<template>
	<DBPage variant="fixed">
		<main>Page content</main>
		<DBFooter width="medium">
			<nav aria-label="Footer navigation">
				<ul>
					<li><DBLink href="/about">About us</DBLink></li>
					<li><DBLink href="/contact">Contact</DBLink></li>
				</ul>
			</nav>
			<template #meta>
				<nav aria-label="Legal navigation">
					<ul>
						<li><DBLink href="/privacy">Privacy</DBLink></li>
						<li><DBLink href="/imprint">Imprint</DBLink></li>
					</ul>
				</nav>
			</template>
		</DBFooter>
	</DBPage>
</template>
```

`showMain`, `showMeta`, and `showCopyright` default to `true`; bind booleans with `:showMain="false"`. Use `id` and `class` for root attributes. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
