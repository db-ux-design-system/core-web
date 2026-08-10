<script setup lang="ts">
import { DBLink, DBStack } from "@components";
import {
	type ColumnFiltersState,
	type GroupingState,
	stockFeatures,
	useTable
} from "@tanstack/vue-table";
import { ref, watch } from "vue";
import ActionButtons from "./components/ActionButtons.vue";
import CustomTable from "./components/CustomTable.vue";
import TableControls from "./components/TableControls.vue";
import { useSkipper } from "./hooks";
import { makeData } from "./makeData";
import {
	columns,
	defaultColumn,
	fuzzyFilter,
	getTableMeta
} from "./tableModels";

const data = ref(makeData(1000));
const columnVisibility = ref({});
const grouping = ref<GroupingState>([]);
const rowSelection = ref({});
const columnPinning = ref({ start: [] as string[], end: [] as string[] });
const columnFilters = ref<ColumnFiltersState>([]);
const globalFilter = ref("");

const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper().value;

const table = useTable({
	features: stockFeatures,
	get data() {
		return data.value;
	},
	columns,
	defaultColumn,
	onColumnFiltersChange: (updater) => {
		columnFilters.value =
			typeof updater === "function"
				? updater(columnFilters.value)
				: updater;
	},
	onGlobalFilterChange: (updater) => {
		globalFilter.value =
			typeof updater === "function"
				? updater(globalFilter.value)
				: updater;
	},
	globalFilterFn: fuzzyFilter,
	autoResetPageIndex,
	enableColumnResizing: true,
	columnResizeMode: "onChange",
	onColumnVisibilityChange: (updater) => {
		columnVisibility.value =
			typeof updater === "function"
				? updater(columnVisibility.value)
				: updater;
	},
	onGroupingChange: (updater) => {
		grouping.value =
			typeof updater === "function" ? updater(grouping.value) : updater;
	},
	onColumnPinningChange: (updater) => {
		columnPinning.value =
			typeof updater === "function"
				? updater(columnPinning.value)
				: updater;
	},
	onRowSelectionChange: (updater) => {
		rowSelection.value =
			typeof updater === "function"
				? updater(rowSelection.value)
				: updater;
	},
	meta: getTableMeta((updater) => {
		data.value = updater(data.value);
	}, skipAutoResetPageIndex),
	state: {
		get grouping() {
			return grouping.value;
		},
		get columnFilters() {
			return columnFilters.value;
		},
		get globalFilter() {
			return globalFilter.value;
		},
		get columnVisibility() {
			return columnVisibility.value;
		},
		get columnPinning() {
			return columnPinning.value;
		},
		get rowSelection() {
			return rowSelection.value;
		}
	},
	initialState: {
		pagination: {
			pageIndex: 0,
			pageSize: 5
		}
	},
	debugTable: true,
	debugHeaders: true,
	debugColumns: true
});

watch(
	() => table.store.state.columnFilters[0]?.id,
	(newId) => {
		if (newId === "fullName") {
			if (table.store.state.sorting[0]?.id !== "fullName") {
				table.setSorting([{ id: "fullName", desc: false }]);
			}
		}
	}
);
</script>

<template>
	<DBStack>
		<p>
			This example demonstrates a complex table with lots of different
			features and functionality by using
			<DBLink
				content="external"
				target="_blank"
				referrerPolicy="no-referrer"
				href="https://tanstack.com/table/latest/docs/installation#vue"
			>
				TanStack Table
			</DBLink>
		</p>
		<p>
			See full example
			<DBLink
				content="external"
				target="_blank"
				referrerPolicy="no-referrer"
				href="https://github.com/db-ux-design-system/core-web/tree/main/storybooks/vue-storybook/src/templates/table-kitchen-sink"
			>
				here
			</DBLink>
		</p>
		<TableControls
			:table="table"
			:globalFilter="globalFilter"
			@update:globalFilter="globalFilter = $event"
		/>
		<CustomTable :table="table" />
		<ActionButtons
			:hasNextPage="table.getCanNextPage()"
			:hasPreviousPage="table.getCanPreviousPage()"
			:nextPage="table.nextPage"
			:pageCount="table.getPageCount()"
			:pageIndex="table.store.state.pagination.pageIndex"
			:pageSize="table.store.state.pagination.pageSize"
			:previousPage="table.previousPage"
			:setPageIndex="table.setPageIndex"
			:setPageSize="table.setPageSize"
		/>
	</DBStack>
</template>
