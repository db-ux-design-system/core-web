<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion.json";
import { DBAccordion } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBAccordion" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBAccordion>{{exampleName}}</DBAccordion>
		</template>
	</DefaultComponent>
</template>

