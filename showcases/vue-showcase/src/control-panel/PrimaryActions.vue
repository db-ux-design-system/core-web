<script setup lang="ts">
import {
	DBButton,
	DBControlPanelPrimaryActions,
	DBDivider,
	DBDrawer,
	DBSelect,
	DBTooltip,
	DENSITIES,
	SEMANTICS
} from "@components";
import { ref } from "vue";
import { defaultSettingsMapping } from "../../../shared/default-component-data";
import { useLayout } from "../composables/use-layout";

const { density, color, onChange, settings } = useLayout();

const sendSettings = (event: any, key: string) => {
	onChange(
		{
			...settings.value,
			[key]: event?.target?.value
		},
		"settings"
	);
};

const open = ref(false);
</script>

<template>
	<DBControlPanelPrimaryActions>
		<DBDrawer
			drawer-header-plain="Settings"
			:open="open"
			@close="() => (open = false)"
		>
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
				<option v-for="col of SEMANTICS" :value="col">
					{{ col }}
				</option>
			</DBSelect>
			<DBDivider />
			<template
				v-for="([key, value], index) of Object.entries(
					defaultSettingsMapping
				)"
			>
				<DBSelect
					:label="key"
					variant="floating"
					:value="settings[key]"
					@change="sendSettings($event, key)"
				>
					<option v-for="col of value" :value="col">
						{{ col }}
					</option>
				</DBSelect>
				<template v-if="index === 1 || index === 3"
					><DBDivider
				/></template>
			</template>
		</DBDrawer>
		<DBButton
			icon="gear_wheel"
			variant="ghost"
			no-text
			@click="() => (open = true)"
		>
			Settings
			<DBTooltip>Settings</DBTooltip>
		</DBButton>
	</DBControlPanelPrimaryActions>
</template>
