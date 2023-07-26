<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion-item.json";
import { DBAccordionItem } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBAccordionItem" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBAccordionItem>{{exampleName}}</DBAccordionItem>
		</template>
	</DefaultComponent>
</template>

