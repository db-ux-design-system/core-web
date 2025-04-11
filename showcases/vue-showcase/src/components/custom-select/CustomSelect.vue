<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/custom-select.json";
import { DBCustomSelect, DBInfotext } from "../../../../../output/vue/src";

const log = (values: string[]) => {
	// eslint-disable-next-line no-alert
	console.log(values);
};
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
				selectAllLabel="Select all"
				searchLabel="Search"
				:selectedType="exampleProps?.selectedType"
				:formFieldWidth="exampleProps?.formFieldWidth"
				:values="exampleProps?.mValue"
				:on-option-selected="(values) => log(values)"
			/>
		</template>
	</DefaultComponent>
</template>
