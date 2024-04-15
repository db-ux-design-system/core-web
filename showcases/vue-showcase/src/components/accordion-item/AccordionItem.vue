<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion-item.json";
import { DBAccordionItem } from "../../../../../output/vue/src";
import { ref } from "vue";
</script>

<template>
	<DefaultComponent
		title="DBAccordionItem"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBAccordionItem
				:headlinePlain="exampleProps.headlinePlain"
				:disabled="exampleProps.disabled"
				:default-open="exampleProps.open"
			>
				{{ exampleName }}
			</DBAccordionItem>
		</template>
	</DefaultComponent>
</template>
