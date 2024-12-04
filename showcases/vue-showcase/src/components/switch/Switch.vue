<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/switch.json";
import {
	DBSwitch,
	DBInfotext,
	DBCheckbox
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
			>
				{{ exampleName }}
			</DBSwitch>
			<DBInfotext
				v-if="exampleProps?.variant === 'hidden'"
				semantic="informational"
				icon="none"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
