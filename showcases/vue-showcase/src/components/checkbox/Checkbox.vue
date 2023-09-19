<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/checkbox.json";
import { DBCheckbox } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Checkbox" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBCheckbox
				:label="exampleProps.label"
				:variant="exampleProps.variant"
				:options="exampleProps.options"
				:checked="exampleProps.checked"
				:disabled="exampleProps.disabled"
				:value="exampleProps.value"
				:required="exampleProps.required"
				:indeterminate="exampleProps.indeterminate"
				:invalid="exampleProps.invalid"
				:size="exampleProps.size"
				>{{ exampleName }}</DBCheckbox
			>
		</template>
	</DefaultComponent>
</template>
