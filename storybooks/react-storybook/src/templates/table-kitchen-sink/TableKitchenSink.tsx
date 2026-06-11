import {
	type ColumnFiltersState,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getGroupedRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type GroupingState,
	useReactTable
} from '@tanstack/react-table';
import { makeData } from './makeData';

import { DBLink, DBStack } from '@components';
import { useEffect, useState } from 'react';
import ActionButtons from './components/ActionButtons';
import CustomTable from './components/CustomTable';
import TableControls from './components/TableControls';
import { useSkipper } from './hooks';
import {
	columns,
	defaultColumn,
	fuzzyFilter,
	getTableMeta
} from './tableModels';

export const TableKitchenSink = () => {
	const [data, setData] = useState(makeData(1000));

	const [columnVisibility, setColumnVisibility] = useState({});
	const [grouping, setGrouping] = useState<GroupingState>([]);
	const [rowSelection, setRowSelection] = useState({});
	const [columnPinning, setColumnPinning] = useState({});
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = useState('');

	const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

	const table = useReactTable({
		data,
		columns,
		defaultColumn,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getGroupedRowModel: getGroupedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		autoResetPageIndex,
		enableColumnResizing: true,
		columnResizeMode: 'onChange',
		onColumnVisibilityChange: setColumnVisibility,
		onGroupingChange: setGrouping,
		onColumnPinningChange: setColumnPinning,
		onRowSelectionChange: setRowSelection,
		// Provide our updateData function to our table meta
		meta: getTableMeta(setData, skipAutoResetPageIndex),
		state: {
			grouping,
			columnFilters,
			globalFilter,
			columnVisibility,
			columnPinning,
			rowSelection
		},
		initialState: {
			pagination: {
				pageSize: 5
			}
		},
		debugTable: true,
		debugHeaders: true,
		debugColumns: true
	});

	useEffect(() => {
		if (table.getState().columnFilters[0]?.id === 'fullName') {
			if (table.getState().sorting[0]?.id !== 'fullName') {
				table.setSorting([{ id: 'fullName', desc: false }]);
			}
		}
	}, [table.getState().columnFilters[0]?.id]);

	return (
		<DBStack>
			<p>
				This example demonstrates a complex table with lots of different
				features and functionality by using{' '}
				<DBLink
					content="external"
					target="_blank"
					referrerPolicy="no-referrer"
					href="https://tanstack.com/table/latest/docs/installation#react">
					TanStack Table
				</DBLink>
			</p>
			<p>
				See full example{' '}
				<DBLink
					content="external"
					target="_blank"
					referrerPolicy="no-referrer"
					href="https://github.com/db-ux-design-system/core-web/tree/main/storybooks/react-storybook/src/templates/table-kitchen-sink">
					here
				</DBLink>
			</p>
			<TableControls
				table={table}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<CustomTable table={table} />
			<ActionButtons
				hasNextPage={table.getCanNextPage()}
				hasPreviousPage={table.getCanPreviousPage()}
				nextPage={table.nextPage}
				pageCount={table.getPageCount()}
				pageIndex={table.getState().pagination.pageIndex}
				pageSize={table.getState().pagination.pageSize}
				previousPage={table.previousPage}
				setPageIndex={table.setPageIndex}
				setPageSize={table.setPageSize}
			/>
		</DBStack>
	);
};

export default TableKitchenSink;
