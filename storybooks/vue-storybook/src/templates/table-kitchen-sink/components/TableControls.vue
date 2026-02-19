<script setup lang="ts">
import { DBCard, DBCustomSelect, DBStack } from "@components";
import type { Table } from "@tanstack/vue-table";
import { computed } from "vue";
import DebouncedInput from "./DebouncedInput.vue";

interface Props {
	table: Table<any>;
	globalFilter: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
	"update:globalFilter": [value: string];
}>();

const visibleColumns = computed(() =>
	props.table
		.getAllLeafColumns()
		.filter(({ getIsVisible }) => getIsVisible())
		.map(({ id }) => id)
);

const columnOptions = computed(() =>
	props.table.getAllLeafColumns().map(({ id }) => ({ id, value: id }))
);

const handleColumnSelection = (values: string[]) => {
	props.table.getAllLeafColumns().forEach(({ id, toggleVisibility }) => {
		toggleVisibility(values.includes(id));
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
