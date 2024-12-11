<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/radio.json";
import { DBCheckbox, DBRadio } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBRadio" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBRadio
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
		</template>
	</DefaultComponent>
</template>
