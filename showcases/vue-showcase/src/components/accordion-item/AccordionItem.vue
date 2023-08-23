<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/accordion-item.json";
import { DBAccordionItem } from "../../../../../output/vue/vue3/src";
import { ref } from "vue";

const openId = ref<string | undefined>(undefined);

const getId = (exampleIndex: number, variantIndex: number) =>
	`${variantIndex}${exampleIndex}`;
const toggle = (exampleIndex: number, variantIndex: number) => {
	if (openId.value === getId(exampleIndex, variantIndex)) {
		openId.value = undefined;
	} else {
		openId.value = getId(exampleIndex, variantIndex);
	}
};

const isOpen = (exampleIndex: number, variantIndex: number, open?: boolean) =>
	openId.value === getId(exampleIndex, variantIndex) ? true : open;
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
				:title="exampleProps.title"
				:disabled="exampleProps.disabled"
				:open="isOpen(exampleIndex, variantIndex, exampleProps.open)"
				@onToggle="toggle(exampleIndex, variantIndex)"
			>
				{{ exampleName }}
			</DBAccordionItem>
		</template>
	</DefaultComponent>
</template>
