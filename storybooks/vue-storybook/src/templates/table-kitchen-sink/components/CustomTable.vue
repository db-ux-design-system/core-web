<script setup lang="ts" generic="T extends RowData">
import {
	DBButton,
	DBTable,
	DBTableBody,
	DBTableDataCell,
	DBTableFooter,
	DBTableHead,
	DBTableHeaderCell,
	DBTableRow,
	DBTooltip
} from "@components";
import { FlexRender, type RowData, type Table } from "@tanstack/vue-table";
import Filter from "./Filter.vue";

interface Props {
	table: Table<T>;
}

defineProps<Props>();

const getSortIcon = (isSorted: false | "asc" | "desc") => {
	if (!isSorted) return "arrows_vertical";
	return isSorted === "asc" ? "sort_down" : "sort_up";
};

const getSortTooltip = (isSorted: false | "asc" | "desc") => {
	if (!isSorted) return "Sort ascending";
	return isSorted === "asc" ? "Sort descending" : "Sort ascending";
};
</script>

<template>
	<DBTable
		:columnSizes="{ 0: 'min-content', 4: 'min-content', 5: 'min-content' }"
	>
		<DBTableHead>
			<DBTableRow
				v-for="headerGroup in table.getHeaderGroups()"
				:key="headerGroup.id"
				interactive
			>
				<DBTableHeaderCell
					v-for="header in headerGroup.headers"
					:key="header.id"
					:colSpan="header.colSpan"
					class="relative"
				>
					<div
						v-if="!header.isPlaceholder"
						style="
							display: inline-flex;
							gap: var(--db-spacing-fixed-3xs);
							overflow: hidden;
							inline-size: fit-content;
							block-size: fit-content;
						"
					>
						<span style="white-space: nowrap">
							<FlexRender
								:render="header.column.columnDef.header"
								:props="header.getContext()"
							/>
						</span>
						<DBButton
							v-if="header.column.getCanSort()"
							variant="ghost"
							size="small"
							@click="
								header.column.getToggleSortingHandler()?.(
									$event
								)
							"
							noText
							:icon="getSortIcon(header.column.getIsSorted())"
						>
							<DBTooltip placement="top">
								{{
									getSortTooltip(header.column.getIsSorted())
								}}
							</DBTooltip>
						</DBButton>
						<Filter
							v-if="header.column.getCanFilter()"
							:column="header.column"
							:table="table"
						/>
					</div>
				</DBTableHeaderCell>
			</DBTableRow>
		</DBTableHead>
		<DBTableBody>
			<DBTableRow
				v-for="row in table.getRowModel().rows"
				:key="row.id"
				interactive
			>
				<DBTableDataCell
					v-for="cell in row.getVisibleCells()"
					:key="cell.id"
				>
					<FlexRender
						:render="cell.column.columnDef.cell"
						:props="cell.getContext()"
					/>
				</DBTableDataCell>
			</DBTableRow>
		</DBTableBody>
		<DBTableFooter>
			<DBTableRow
				v-for="footerGroup in table.getFooterGroups()"
				:key="footerGroup.id"
			>
				<DBTableHeaderCell
					v-for="header in footerGroup.headers"
					:key="header.id"
					:colSpan="header.colSpan"
				>
					<FlexRender
						v-if="!header.isPlaceholder"
						:render="header.column.columnDef.footer"
						:props="header.getContext()"
					/>
				</DBTableHeaderCell>
			</DBTableRow>
		</DBTableFooter>
	</DBTable>
</template>
