<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBNavigation,
	DBShell
} from "../../../packages/components/src";
import NavItemComponent from "./NavItemComponent.vue";

import { useLayout } from "./composables/use-layout";
import MetaNavigation from "./control-panel/MetaNavigation.vue";
import SecondaryActions from "./control-panel/SecondaryActions.vue";
import PrimaryActions from "./control-panel/PrimaryActions.vue";

const {
	page,
	fullscreen,
	drawerOpen,
	classNames,
	toggleDrawer,
	sortedNavigation
} = useLayout();
</script>

<template>
	<div v-if="page || fullscreen" :class="classNames">
		<router-view></router-view>
	</div>
	<DBShell v-if="!page && !fullscreen" fadeIn>
		<template v-slot:control-panel-desktop>
			<DBControlPanelDesktop
				:drawerOpen="drawerOpen"
				:onToggle="toggleDrawer"
			>
				<template v-slot:brand>
					<DBControlPanelBrand>Showcase</DBControlPanelBrand>
				</template>
				<DBNavigation aria-label="main navigation">
					<template v-for="item of sortedNavigation">
						<NavItemComponent :navItem="item"></NavItemComponent>
					</template>
				</DBNavigation>
				<template v-slot:primary-actions>
					<PrimaryActions />
				</template>
				<template v-slot:secondary-actions>
					<SecondaryActions />
				</template>
				<template v-slot:meta-navigation>
					<MetaNavigation />
				</template>
			</DBControlPanelDesktop>
		</template>
		<div :class="classNames">
			<router-view></router-view>
		</div>
	</DBShell>
</template>
