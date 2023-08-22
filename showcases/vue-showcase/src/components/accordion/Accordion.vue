<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion.json";
import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBAccordion" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext size="small" variant="informational">
				{{ exampleName }}
			</DBInfotext>
			<DBAccordion behaviour="{behaviour}">
				<DBAccordionItem title="Item 1" content="Content 1" />
				<DBAccordionItem title="Item 2" content="Content 2" />
				<DBAccordionItem title="Item 3" content="Content 3" />
			</DBAccordion>
		</template>
	</DefaultComponent>
</template>
