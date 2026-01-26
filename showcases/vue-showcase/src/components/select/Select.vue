<script setup lang="ts">
import { DBSelect } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/select.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBSelect" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSelect
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
				:label="exampleProps?.label"
				:placeholder="exampleProps?.placeholder"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:options="exampleProps?.options"
				:disabled="exampleProps?.disabled"
				:icon="exampleProps?.icon"
				:value="exampleProps?.value"
				:message="exampleProps?.message"
				:required="exampleProps?.required"
				:showMessage="exampleProps?.showMessage"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:validation="exampleProps?.validation"
				:showEmptyOption="exampleProps?.showEmptyOption"
			/>
		</template>
	</DefaultComponent>
</template>
