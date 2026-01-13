<script setup lang="ts">
import { DBInput, LabelVariantType, ValueLabelType } from "@components";
import defaultComponentVariants from "../../../../shared/input.json";
import DefaultComponent from "../DefaultComponent.vue";

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
				:maxLength="exampleProps?.maxLength"
				:max="exampleProps?.max"
				:min="exampleProps?.min"
				:variant="exampleProps?.variant"
				:show-label="exampleProps?.showLabel"
				:label="exampleProps?.label"
				:message="exampleProps?.message"
				:placeholder="exampleName"
				:minLength="exampleProps?.minLength"
				:required="exampleProps?.required"
				:type="exampleProps?.type"
				:disabled="exampleProps?.disabled"
				:readOnly="exampleProps?.readOnly"
				:value="exampleProps?.value"
				:icon="exampleProps?.icon"
				:showIcon="exampleProps?.showIcon"
				:iconTrailing="exampleProps?.iconTrailing"
				:showIconTrailing="exampleProps?.showIconTrailing"
				:showMessage="exampleProps?.showMessage"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:validation="exampleProps?.validation"
				:dataList="
					exampleProps?.dataList
						? getDataList(exampleProps?.variant)
						: undefined
				"
			></DBInput>
		</template>
	</DefaultComponent>
</template>
