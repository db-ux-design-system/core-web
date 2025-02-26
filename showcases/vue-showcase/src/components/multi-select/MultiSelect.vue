<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/multi-select.json";
import { DBMultiSelect, DBInfotext } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent
		title="DBMultiSelect"
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

			<DBMultiSelect
				v-if="!exampleProps?.lineBreak && !exampleProps?.info"
				:label="exampleName"
				:options="exampleProps?.options"
				:variant="exampleProps?.variant"
				:message="exampleProps?.message"
				:required="exampleProps?.required"
				:placeholder="exampleProps?.placeholder"
				:showLabel="exampleProps?.showLabel"
				:placement="exampleProps?.placement"
				selectAllLabel="Select all"
				deSelectAllLabel="Deselect all"
				searchLabel="Search"
				:selectedType="exampleProps?.selectedType"
				:tagWrapping="exampleProps?.tagWrapping"
				:width="exampleProps?.width"
				noResultsText="No matching filter"
				:values="exampleProps?.mValue"
				:on-select="(event) => console.log(event)"
			/>
		</template>
	</DefaultComponent>
</template>
