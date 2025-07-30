<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBNavigation,
	DBShell,
	DBShellSubNavigation
} from "@components";
import NavItemComponent from "./NavItemComponent.vue";

import { useLayout } from "./composables/use-layout";
import MetaNavigation from "./control-panel/MetaNavigation.vue";
import PrimaryActions from "./control-panel/PrimaryActions.vue";
import SecondaryActions from "./control-panel/SecondaryActions.vue";

const { page, fullscreen, classNames, sortedNavigation, settings } =
	useLayout();
</script>

<template>
	<div v-if="page || fullscreen" :class="classNames">
		<router-view></router-view>
	</div>
	<DBShell
		v-if="!page && !fullscreen"
		fadeIn
		:controlPanelDesktopPosition="settings.controlPanelDesktopPosition"
		:controlPanelMobilePosition="settings.controlPanelMobilePosition"
		:subNavigationDesktopPosition="settings.subNavigationDesktopPosition"
		:subNavigationMobilePosition="settings.subNavigationMobilePosition"
		:show-sub-navigation="settings.subNavigation === 'true'"
	>
		<template v-slot:sub-navigation>
			<DBShellSubNavigation>
				<DBNavigation
					:variant="settings.subNavigationVariant"
					aria-label="sub navigation"
				>
					<template v-for="item of sortedNavigation">
						<NavItemComponent :navItem="item"></NavItemComponent>
					</template>
				</DBNavigation>
			</DBShellSubNavigation>
		</template>
		<template v-slot:control-panel-desktop>
			<DBControlPanelDesktop>
				<template v-slot:brand>
					<DBControlPanelBrand>Showcase</DBControlPanelBrand>
				</template>
				<DBNavigation
					:variant="settings.navigationDesktopVariant"
					aria-label="main navigation desktop"
				>
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
		<template v-slot:control-panel-mobile>
			<DBControlPanelMobile drawerHeadlinePlain="Showcase">
				<template v-slot:brand>
					<DBControlPanelBrand>Showcase</DBControlPanelBrand>
				</template>
				<DBNavigation
					:variant="settings.navigationMobileVariant"
					aria-label="main navigation mobile"
				>
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
			</DBControlPanelMobile>
		</template>
		<div :class="classNames">
			<router-view></router-view>
		</div>
	</DBShell>
</template>
