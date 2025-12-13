<script setup lang="ts">
import { CustomSelectOptionType } from "@db-ux/core-components/src/components/custom-select/model";
import { DBCustomSelect, DBInfotext } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/custom-select.json";
import DefaultComponent from "../DefaultComponent.vue";

const log = (values: string[]) => {
	// eslint-disable-next-line no-alert
	console.log(values);
};

const getAriaLabel = (exampleProps, exampleName): string => {
	return `${exampleProps.id}-${exampleName}`;
};

const getTransformSelectedLabels = (selectedOptions?: any): string => {
	return selectedOptions
		.map((option: any) => option.value.at(option.value.length - 1))
		.join(", ");
};

const getSearchFilter = (option: CustomSelectOptionType, _: string): boolean =>
	option.value === "Option 1";
</script>

<template>
	<DefaultComponent
		title="DBCustomSelect"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext
				v-if="exampleProps?.info"
				size="small"
				semantic="informational"
			>
				{{ exampleName }}
			</DBInfotext>

			<i v-if="exampleProps?.lineBreak" class="line-break" />

			<DBCustomSelect
				v-if="!exampleProps?.lineBreak && !exampleProps?.info"
				:showRequiredAsterisk="exampleProps?.showRequiredAsterisk"
				:listLabel="getAriaLabel(exampleProps, exampleName)"
				:disabled="exampleProps?.disabled"
				:icon="exampleProps?.icon"
				:showMessage="exampleProps?.showMessage"
				:showIcon="exampleProps?.showIcon"
				:dropdownWidth="exampleProps?.dropdownWidth"
				:showClearSelection="exampleProps?.showClearSelection"
				:showSelectAll="exampleProps?.showSelectAll"
				:showSearch="exampleProps?.showSearch"
				:showLoading="exampleProps?.showLoading"
				:showNoResults="exampleProps?.showNoResults"
				:multiple="exampleProps?.multiple"
				:loadingText="exampleProps?.loadingText"
				:noResultsText="
					exampleProps?.noResultsText ?? 'No matching filter'
				"
				:label="exampleName"
				:options="exampleProps?.options"
				:variant="exampleProps?.variant"
				:message="exampleProps?.message"
				:required="exampleProps?.required"
				:placeholder="exampleProps?.placeholder"
				:showLabel="exampleProps?.showLabel"
				:placement="exampleProps?.placement"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:validation="exampleProps?.validation"
				selectAllLabel="Select all"
				searchLabel="Search"
				:searchValue="exampleProps?.searchValue"
				:selectedLabels="exampleProps?.selectedLabels"
				selectedPrefix="Selected"
				:transformSelectedLabels="
					exampleProps?.transformSelectedLabels
						? getTransformSelectedLabels
						: undefined
				"
				:searchFilter="
					exampleProps?.searchFilter ? getSearchFilter : undefined
				"
				:selectedType="exampleProps?.selectedType"
				:formFieldWidth="exampleProps?.formFieldWidth"
				:on-option-selected="(values) => log(values)"
				:removeTagsTexts="exampleProps?.removeTagsTexts"
			/>
		</template>
	</DefaultComponent>
</template>
