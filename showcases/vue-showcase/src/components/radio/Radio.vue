<script setup lang="ts">
import { DBInfotext, DBRadio } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/radio.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBRadio" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBRadio
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
				:label="exampleProps?.label"
				:size="exampleProps?.size"
				:name="exampleProps?.name"
				:checked="exampleProps?.checked"
				:value="exampleProps?.value"
				:required="exampleProps?.required"
				:show-label="exampleProps?.showLabel"
				:disabled="exampleProps?.disabled"
				:validation="exampleProps?.validation"
			>
				{{ exampleName }}
			</DBRadio>
			<template
				v-if="
					exampleProps?.showLabel !== undefined &&
					!exampleProps?.showLabel
				"
			>
				<DBInfotext
					semantic="informational"
					size="small"
					:showIcon="false"
				>
					{{ exampleName }}
				</DBInfotext>
			</template>
		</template>
	</DefaultComponent>
</template>
