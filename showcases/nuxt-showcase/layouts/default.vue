<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelNavigation,
	DBShell
} from "@components";
import NavItemComponent from "../../vue-showcase/src/NavItemComponent.vue";
import { useLayout } from "../../vue-showcase/src/composables/use-layout";

const {
	page,
	fullscreen,
	density,
	color,
	classNames,
	onChange,
	sortedNavigation
} = useLayout();
</script>

<template>
	<div>
		<div v-if="page || fullscreen" :class="classNames">
			<slot />
		</div>
		<DBShell v-if="!page && !fullscreen" variant="fixed" :fadeIn="true">
			<template v-slot:header>
				<DBControlPanelDesktop>
					<template v-slot:brand>
						<DBControlPanelBrand data-logo="db-systel" />
					</template>
					<DBControlPanelNavigation>
						{{ page }}
						<template v-for="item of sortedNavigation">
							<NavItemComponent
								:navItem="item"
							></NavItemComponent>
						</template>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</template>
			<div :class="classNames">
				<slot />
			</div>
		</DBShell>
	</div>
</template>
