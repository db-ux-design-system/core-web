<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion.json";
import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBAccordion" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext size="small" semantic="informational" icon="none">
				{{ exampleName }}
			</DBInfotext>
			<DBAccordion
				:behaviour="exampleProps?.behaviour"
				:variant="exampleProps?.variant"
			>
				<DBAccordionItem headlinePlain="Item 1" text="Content 1" />
				<DBAccordionItem headlinePlain="Item 2" text="Content 2" />
				<DBAccordionItem headlinePlain="Item 3" text="Content 3" />
			</DBAccordion>
		</template>
	</DefaultComponent>
</template>
