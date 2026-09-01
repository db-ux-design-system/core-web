<script setup lang="ts">
import { DBCard, DBCustomSelect, DBStack } from "@components";
import type { StockFeatures, Table } from "@tanstack/vue-table";
import { computed } from "vue";
import DebouncedInput from "./DebouncedInput.vue";

interface Props {
	table: Table<StockFeatures, any>;
	globalFilter: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
	"update:globalFilter": [value: string];
}>();

const visibleColumns = computed(() =>
	props.table
		.getAllLeafColumns()
		.filter((column) => column.getIsVisible())
		.map((column) => column.id)
);

const columnOptions = computed(() =>
	props.table
		.getAllLeafColumns()
		.map((column) => ({ id: column.id, value: column.id }))
);

const handleColumnSelection = (values: string[]) => {
	props.table.getAllLeafColumns().forEach((column) => {
		column.toggleVisibility(values.includes(column.id));
	});
};
</script>

<template>
	<DBCard>
		<DBStack>
			<DebouncedInput
				:modelValue="globalFilter ?? ''"
				@update:modelValue="emit('update:globalFilter', String($event))"
				placeholder="Search all columns..."
				label="Search"
			/>
			<DBCustomSelect
				label="Show Columns"
				placeholder="Show Columns"
				multiple
				:values="visibleColumns"
				:options="columnOptions"
				selectAllLabel="Toggle All"
				@optionSelected="handleColumnSelection"
			/>
		</DBStack>
	</DBCard>
</template>
