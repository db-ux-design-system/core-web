<script setup lang="ts">
import { DBTextarea } from "@db-ux/v-core-components/src";
import defaultComponentVariants from "../../../../shared/textarea.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBTextarea" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTextarea
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
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
