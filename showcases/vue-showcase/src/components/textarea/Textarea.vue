<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/textarea.json";
import { DBCheckbox, DBInput, DBTextarea } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBTextarea" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTextarea
				:cols="exampleProps?.cols"
				:disabled="exampleProps?.disabled"
				:show-label="exampleProps?.showLabel"
				:message="exampleProps?.message"
				:required="exampleProps?.required"
				:readOnly="exampleProps?.readOnly"
				:label="exampleProps?.label"
				:placeholder="exampleProps?.placeholder || exampleName"
				:rows="exampleProps?.rows"
				:value="exampleProps?.value"
				:variant="exampleProps?.variant"
				:showMessage="exampleProps?.showMessage"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:validation="exampleProps?.validation"
				:showResizer="exampleProps?.showResizer"
				:fieldSizing="exampleProps?.fieldSizing"
			></DBTextarea>
		</template>
	</DefaultComponent>
</template>
