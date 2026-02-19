<script setup lang="ts" generic="T extends RowData">
import { DBButton, DBPopover, DBStack, DBTooltip } from "@components";
import type { Column, RowData, Table } from "@tanstack/vue-table";
import { computed } from "vue";
import DebouncedInput from "./DebouncedInput.vue";

interface Props {
	column: Column<T, unknown>;
	table: Table<T>;
}

const props = defineProps<Props>();

const firstValue = computed(() =>
	props.table.getPreFilteredRowModel().flatRows[0]?.getValue(props.column.id)
);

const columnFilterValue = computed(() => props.column.getFilterValue());
const uniqueValues = computed(() => props.column.getFacetedUniqueValues());

const sortedUniqueValues = computed(() =>
	typeof firstValue.value === "number"
		? []
		: Array.from(uniqueValues.value.keys()).sort()
);

const minMax = computed(() => props.column.getFacetedMinMaxValues());
const min = computed(() => Number(minMax.value?.[0] ?? ""));
const max = computed(() => Number(minMax.value?.[1]));

const updateMinFilter = (value: string | number) => {
	props.column.setFilterValue((old: [number, number]) => [value, old?.[1]]);
};

const updateMaxFilter = (value: string | number) => {
	props.column.setFilterValue((old: [number, number]) => [old?.[0], value]);
};
</script>

<template>
	<DBPopover placement="top" :trigger="() => $refs.triggerButton">
		<template #trigger>
			<DBButton
				ref="triggerButton"
				size="small"
				variant="ghost"
				noText
				icon="funnel"
			>
				Filter
				<DBTooltip placement="right">Filter</DBTooltip>
			</DBButton>
		</template>
		<DBStack v-if="typeof firstValue === 'number'">
			<DebouncedInput
				type="number"
				:min="min"
				:max="max"
				:modelValue="(columnFilterValue as [number, number])?.[0] ?? ''"
				@update:modelValue="updateMinFilter"
				label="Minimum"
				:placeholder="`Min ${minMax?.[0] ? `(${min})` : ''}`"
			/>
			<DebouncedInput
				type="number"
				:min="min"
				:max="max"
				:modelValue="(columnFilterValue as [number, number])?.[1] ?? ''"
				@update:modelValue="updateMaxFilter"
				label="Maximum"
				:placeholder="`Max ${minMax?.[1] ? `(${max})` : ''}`"
			/>
		</DBStack>
		<template v-else>
			<datalist :id="column.id + 'list'">
				<option
					v-for="value in sortedUniqueValues.slice(0, 5000)"
					:key="value"
					:value="value"
				/>
			</datalist>
			<DebouncedInput
				type="text"
				:modelValue="(columnFilterValue as string) ?? ''"
				@update:modelValue="column.setFilterValue"
				:placeholder="`Search... (${uniqueValues.size})`"
				label="Search"
				:list="column.id + 'list'"
			/>
		</template>
	</DBPopover>
</template>
