<script setup lang="ts">
import { DBInfotext, DBSwitch } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/switch.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBSwitch" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSwitch
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
				:visualAid="exampleProps?.visualAid"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:required="exampleProps?.required"
				:showLabel="exampleProps?.showLabel"
				:size="exampleProps?.size"
				:emphasis="exampleProps?.emphasis"
				:icon="exampleProps?.icon"
				:iconTrailing="exampleProps?.iconTrailing"
				:validation="exampleProps?.validation"
			>
				{{ exampleName }}
			</DBSwitch>
			<DBInfotext
				v-if="
					exampleProps?.showLabel !== undefined &&
					!exampleProps?.showLabel
				"
				semantic="informational"
				icon="none"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
