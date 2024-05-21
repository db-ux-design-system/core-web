<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input.json";
import {
	DBInput,
	LabelVariantType,
	ValueLabelType
} from "../../../../../output/vue/src";

const getDataList = (
	variant?: LabelVariantType
): string[] | ValueLabelType[] => {
	if (variant === "floating") {
		return ["Test 1", "Test 2"];
	}

	return [
		{ value: "test1", label: "Test 1" },
		{ value: "test2", label: "Test 2" }
	];
};
</script>

<template>
	<DefaultComponent title="DBInput" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInput
				:variant="exampleProps.variant"
				:label="exampleProps.label"
				:message="exampleProps.message"
				:placeholder="exampleName"
				:minLength="exampleProps.minLength"
				:required="exampleProps.required"
				:type="exampleProps.type"
				:disabled="exampleProps.disabled"
				:readOnly="exampleProps.readOnly"
				:value="exampleProps.value"
				:icon="exampleProps.icon"
				:iconAfter="exampleProps.iconAfter"
				:dataList="
					exampleProps.dataList
						? getDataList(exampleProps.variant)
						: undefined
				"
			></DBInput>
		</template>
	</DefaultComponent>
</template>
