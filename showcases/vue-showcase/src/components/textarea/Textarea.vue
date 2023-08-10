<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/textarea.json";
import { DBTextarea } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTextarea" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTextarea
				:cols="exampleProps.cols"
				:disabled="exampleProps.disabled"
				:icon="exampleProps.icon"
				:infomsg="exampleProps.infomsg"
				:label="exampleProps.label"
				:placeholder="exampleProps.placeholder"
				:rows="exampleProps.rows"
				:value="exampleProps.value"
				:variant="exampleProps.variant"
			></DBTextarea>
		</template>
	</DefaultComponent>
</template>
