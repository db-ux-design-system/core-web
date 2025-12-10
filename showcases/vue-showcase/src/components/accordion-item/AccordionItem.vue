<script setup lang="ts">
import { DBAccordionItem } from "@components";
import defaultComponentVariants from "../../../../shared/accordion-item.json";
import DefaultComponent from "../DefaultComponent.vue";
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
				:headlinePlain="exampleProps?.headlinePlain"
				:disabled="exampleProps?.disabled"
				:default-open="exampleProps?.open"
			>
				{{ exampleName }}
			</DBAccordionItem>
		</template>
	</DefaultComponent>
</template>
