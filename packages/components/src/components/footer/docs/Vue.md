## Vue

For installation and configuration, see [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components).

Compose `DBFooterContent` and `DBFooterMeta` inside `DBFooter`. Omit either subcomponent when that visual area is not needed. Copyright is opt-in through `DBFooterMeta`.

```vue App.vue
<script setup lang="ts">
import {
	DBFooter,
	DBFooterContent,
	DBFooterMeta,
	DBLink,
	DBPage
} from "@db-ux/v-core-components";
</script>

<template>
	<DBPage variant="fixed"
		>Page content
		<template #footer>
			<DBFooter width="medium">
				<DBFooterContent
					><nav aria-label="Footer navigation">
						<ul>
							<li>
								<DBLink wrap href="/about">About us</DBLink>
							</li>
							<li>
								<DBLink wrap href="/contact">Contact</DBLink>
							</li>
						</ul>
					</nav></DBFooterContent
				>
				<DBFooterMeta copyright="© Example Company"
					><nav aria-label="Legal navigation">
						<ul>
							<li>
								<DBLink wrap href="/privacy">Privacy</DBLink>
							</li>
							<li>
								<DBLink wrap href="/imprint">Imprint</DBLink>
							</li>
						</ul>
					</nav></DBFooterMeta
				>
			</DBFooter>
		</template>
	</DBPage>
</template>
```

Use `id` and `class` on each component as needed. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
