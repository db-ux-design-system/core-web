<script setup lang="ts">
import {
	DBControlPanelMetaNavigation,
	DBSelect,
	DENSITIES,
	SEMANTICS
} from "@components";
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
</script>

<template>
	<DBControlPanelMetaNavigation>
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
		<template
			v-for="[key, value] of Object.entries(defaultSettingsMapping)"
		>
			<DBSelect
				:label="
					key
						.replace('Position', 'Pos')
						.replace('controlPanel', 'CP')
						.replace('subNavigation', 'SN')
						.replace('navigation', 'Nav')
				"
				variant="floating"
				:value="settings[key]"
				@change="sendSettings($event, key)"
			>
				<option v-for="col of value" :value="col">
					{{ col }}
				</option>
			</DBSelect>
		</template>
	</DBControlPanelMetaNavigation>
</template>
