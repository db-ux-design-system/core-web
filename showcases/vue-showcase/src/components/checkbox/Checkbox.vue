<script setup lang="ts">
import { DBCheckbox, DBInfotext } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/checkbox.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBCheckbox" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCheckbox
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
				:label="exampleProps?.label"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:options="exampleProps?.options"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:value="exampleProps?.value"
				:required="exampleProps?.required"
				:validation="exampleProps?.validation"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:indeterminate="exampleProps?.indeterminate"
				:size="exampleProps?.size"
				>{{ exampleName }}</DBCheckbox
			>

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
