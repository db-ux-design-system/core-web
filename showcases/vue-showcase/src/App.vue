<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBControlPanelNavigation,
	DBShell,
	DBShellContent,
	DBShellSubNavigation
} from "@components";
import NavItemComponent from "./NavItemComponent.vue";

import { useLayout } from "./composables/use-layout";
import Actions1 from "./control-panel/Actions1.vue";
import Actions2 from "./control-panel/Actions2.vue";
import MetaNavigation from "./control-panel/MetaNavigation.vue";
import Page from "./page/Page.vue";

const { page, fullscreen, classNames, sortedNavigation, settings, shell } =
	useLayout();
</script>

<template>
	<div
		v-if="page || fullscreen"
		:class="`fullscreen-container ${classNames}`"
	>
		<router-view></router-view>
	</div>
	<Page v-else-if="!shell" />
	<DBShell
		v-if="!page && !fullscreen && shell"
		fadeIn
		:controlPanelDesktopPosition="settings.controlPanelDesktopPosition"
		:controlPanelMobilePosition="settings.controlPanelMobilePosition"
		:subNavigationDesktopPosition="settings.subNavigationDesktopPosition"
		:subNavigationMobilePosition="settings.subNavigationMobilePosition"
		:show-sub-navigation="settings.subNavigation === 'true'"
	>
		<DBShellSubNavigation>
			<DBControlPanelNavigation
				:variant="settings.subNavigationVariant"
				aria-label="sub navigation"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
		</DBShellSubNavigation>
		<DBControlPanelDesktop>
			<template v-slot:brand>
				<DBControlPanelBrand>Showcase</DBControlPanelBrand>
			</template>
			<DBControlPanelNavigation
				:variant="settings.navigationDesktopVariant"
				aria-label="main navigation desktop"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
			<template v-slot:actions-1>
				<Actions1 />
			</template>
			<template v-slot:actions-2>
				<Actions2 />
			</template>
			<template v-slot:meta>
				<MetaNavigation />
			</template>
		</DBControlPanelDesktop>
		<DBControlPanelMobile drawerHeaderText="Showcase">
			<template v-slot:brand>
				<DBControlPanelBrand>Showcase</DBControlPanelBrand>
			</template>
			<DBControlPanelNavigation
				:variant="settings.navigationMobileVariant"
				aria-label="main navigation mobile"
			>
				<template v-for="item of sortedNavigation">
					<NavItemComponent :navItem="item"></NavItemComponent>
				</template>
			</DBControlPanelNavigation>
			<template v-slot:actions-1>
				<Actions1 />
			</template>
			<template v-slot:actions-2>
				<Actions2 />
			</template>
			<template v-slot:meta>
				<MetaNavigation />
			</template>
		</DBControlPanelMobile>
		<DBShellContent :class="classNames">
			<router-view></router-view>
		</DBShellContent>
	</DBShell>
</template>
