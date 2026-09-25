## Vue

For installation and configuration, see [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components).

Compose `DBFooterContent` and `DBFooterMeta` inside `DBFooter`. `DBFooterMeta` is semantically neutral and accepts navigation, contact information, or other secondary content. It does not create a navigation landmark, so wrap navigational content in a labelled `nav`. Omit either subcomponent when that visual area is not needed. Copyright is opt-in through `DBFooterMeta`.

Place the footer in the `end-slot` of `DBShellContent`. `DBShell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only — it has no footer area. A `DBFooter` placed as a direct child of `DBShell` is therefore auto-placed by the grid and does not end up below the content.

```vue App.vue
<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBFooter,
	DBFooterContent,
	DBFooterMeta,
	DBLink,
	DBShell,
	DBShellContent
} from "@db-ux/v-core-components";
</script>

<template>
	<DBShell>
		<DBControlPanelDesktop>
			<template #brand>
				<DBControlPanelBrand>My App</DBControlPanelBrand>
			</template>
			<!-- Navigation goes here -->
		</DBControlPanelDesktop>
		<DBShellContent
			>Page content
			<template #end-slot>
				<DBFooter width="medium">
					<DBFooterContent
						><nav aria-label="Footer navigation">
							<ul>
								<li>
									<DBLink wrap href="/about">About us</DBLink>
								</li>
								<li>
									<DBLink wrap href="/contact"
										>Contact</DBLink
									>
								</li>
							</ul>
						</nav></DBFooterContent
					>
					<DBFooterMeta copyright="Example Company"
						><nav aria-label="Legal navigation">
							<ul>
								<li>
									<DBLink wrap href="/privacy"
										>Privacy</DBLink
									>
								</li>
								<li>
									<DBLink wrap href="/imprint"
										>Imprint</DBLink
									>
								</li>
							</ul>
						</nav></DBFooterMeta
					>
				</DBFooter>
			</template>
		</DBShellContent>
	</DBShell>
</template>
```

The `variant` of `DBShellContent` decides how the footer behaves while scrolling. With the default `auto` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `fixed` only `main` scrolls, so the footer stays visible.

Use `id` and `class` on each component as needed. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
