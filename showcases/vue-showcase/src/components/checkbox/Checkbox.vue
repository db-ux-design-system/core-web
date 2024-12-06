<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/checkbox.json";
import { DBCheckbox } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBCheckbox" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCheckbox
				:label="exampleProps?.label"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:options="exampleProps?.options"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:value="exampleProps?.value"
				:required="exampleProps?.required"
				:indeterminate="exampleProps?.indeterminate"
				:size="exampleProps?.size"
				>{{ exampleName }}</DBCheckbox
			>
		</template>
	</DefaultComponent>
</template>
