<script setup lang="ts">
import {
	COLORS,
	DENSITIES
} from "../../../packages/components/src/shared/constants";
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBNavigation,
	DBPage,
	DBSelect
} from "../../../packages/v-core-components/src";
import NavItemComponent from "./NavItemComponent.vue";

import { useLayout } from "./composables/use-layout";

const {
	page,
	fullscreen,
	density,
	color,
	drawerOpen,
	classNames,
	onChange,
	toggleDrawer,
	sortedNavigation
} = useLayout();
</script>

<template>
	<div v-if="page || fullscreen" :class="classNames">
		<router-view></router-view>
	</div>
	<DBPage
		v-if="!page && !fullscreen"
		variant="fixed"
		documentOverflow="auto"
		:fadeIn="true"
	>
		<template v-slot:header>
			<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">
				<template v-slot:brand>
					<DBBrand>Showcase</DBBrand>
				</template>
				<DBNavigation aria-label="main navigation">
					<template v-for="item of sortedNavigation">
						<NavItemComponent :navItem="item"></NavItemComponent>
					</template>
				</DBNavigation>
				<template v-slot:call-to-action>
					<DBButton
						icon="magnifying_glass"
						variant="ghost"
						:no-text="true"
					>
						Search
					</DBButton>
				</template>
				<template v-slot:action-bar>
					<DBButton
						icon="x_placeholder"
						variant="ghost"
						:no-text="true"
					>
						Profile
					</DBButton>
					<DBButton
						icon="x_placeholder"
						variant="ghost"
						:no-text="true"
					>
						Notification
					</DBButton>
					<DBButton
						icon="x_placeholder"
						variant="ghost"
						:no-text="true"
					>
						Help
					</DBButton>
				</template>
				<template v-slot:meta-navigation>
					<DBSelect
						label="Density"
						variant="floating"
						:value="density"
						@change="onChange($event, 'density')"
					>
						<option v-for="ton of DENSITIES" :value="ton">
							{{ ton }}
						</option>
					</DBSelect>
					<DBSelect
						label="Color"
						variant="floating"
						:value="color"
						@change="onChange($event, 'color')"
					>
						<option v-for="col of COLORS" :value="col">
							{{ col }}
						</option>
					</DBSelect>
				</template>
			</DBHeader>
		</template>
		<div :class="classNames">
			<router-view></router-view>
		</div>
	</DBPage>
</template>
