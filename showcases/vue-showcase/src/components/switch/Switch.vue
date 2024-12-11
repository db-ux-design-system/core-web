<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/switch.json";
import {
	DBSwitch,
	DBInfotext,
	DBCheckbox,
	DBInput
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBSwitch" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSwitch
				:visualAid="exampleProps?.visualAid"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:showLabel="exampleProps?.showLabel"
				:size="exampleProps?.size"
				:emphasis="exampleProps?.emphasis"
				:icon="exampleProps?.icon"
				:iconAfter="exampleProps?.iconAfter"
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
