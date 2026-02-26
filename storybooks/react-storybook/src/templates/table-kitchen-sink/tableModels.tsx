import { DBBadge, DBCheckbox, DBInput, DBTooltip } from '@components';
import {
	compareItems,
	rankItem,
	type RankingInfo
} from '@tanstack/match-sorter-utils';
import {
	sortingFns,
	type ColumnDef,
	type FilterFn,
	type SortingFn
} from '@tanstack/react-table';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { Person } from './makeData';

export const fuzzyFilter: FilterFn<Person> = (
	row,
	columnId,
	value,
	addMeta
) => {
	// Rank the item
	const itemRank = rankItem(row.getValue(columnId), value);

	// Store the ranking info
	addMeta(itemRank);

	// Return if the item should be filtered in/out
	return itemRank.passed;
};

export const fuzzySort: SortingFn<Person> = (rowA, rowB, columnId) => {
	let dir = 0;

	// Only sort by rank if the column has ranking information
	if (rowA.columnFiltersMeta[columnId]) {
		dir = compareItems(
			rowA.columnFiltersMeta[columnId]! as RankingInfo,
			rowB.columnFiltersMeta[columnId]! as RankingInfo
		);
	}

	// Provide an alphanumeric fallback for when the item ranks are equal
	return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

export type TableMeta = {
	updateData: (rowIndex: number, columnId: string, value: unknown) => void;
};

// Give our default column cell renderer editing superpowers!
export const defaultColumn: Partial<ColumnDef<Person>> = {
	cell: ({ getValue, row: { index }, column: { id, columnDef }, table }) => {
		const initialValue = getValue();
		// We need to keep and update the state of the cell normally
		const [value, setValue] = useState(initialValue);

		// When the input is blurred, we'll call our table meta's updateData function
		const onBlur = () => {
			(table.options.meta as TableMeta).updateData(index, id, value);
		};

		// If the initialValue is changed external, sync it up with our state
		useEffect(() => {
			setValue(initialValue);
		}, [initialValue]);

		return (
			<DBInput
				label={columnDef.header?.toString() || id || ''}
				variant="floating"
				value={value as string}
				onChange={(e) => setValue(e.target.value)}
				onBlur={onBlur}
			/>
		);
	}
};

export const columns: ColumnDef<Person>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<DBCheckbox
				data-table-row-action="true"
				label="Select All"
				showLabel={false}
				checked={table.getIsAllRowsSelected()}
				indeterminate={table.getIsSomeRowsSelected()}
				onChange={table.getToggleAllRowsSelectedHandler()}>
				<DBTooltip placement="top">Select All</DBTooltip>
			</DBCheckbox>
		),
		cell: ({ row }) => (
			<DBCheckbox
				data-table-row-action="true"
				label="Select All"
				showLabel={false}
				checked={row.getIsSelected()}
				indeterminate={row.getIsSomeSelected()}
				onChange={row.getToggleSelectedHandler()}>
				<DBTooltip placement="top">Select All</DBTooltip>
			</DBCheckbox>
		),
		footer: ({ table }) => {
			const length = table.getSelectedRowModel().rows.length;
			const amount = length >= 100 ? '9+' : length.toString();

			return (
				<DBBadge
					label={`${length} Selected`}
					semantic={length > 0 ? 'informational' : 'neutral'}>
					{amount}
				</DBBadge>
			);
		}
	},
	{
		header: 'Name',
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: 'firstName',
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id
			},
			{
				accessorFn: (row) => row.lastName,
				id: 'lastName',
				cell: (info) => info.getValue(),
				header: 'Last Name',
				footer: (props) => props.column.id
			},
			{
				accessorFn: (row) => `${row.firstName} ${row.lastName}`,
				id: 'fullName',
				header: 'Full Name',
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
				filterFn: fuzzyFilter,
				sortingFn: fuzzySort
			}
		]
	},
	{
		header: 'Info',
		footer: (props) => props.column.id,
		columns: [
			{
				accessorKey: 'age',
				header: 'Age',
				footer: (props) => props.column.id
			},
			{
				accessorKey: 'visits',
				header: 'Visits',
				footer: (props) => props.column.id
			},
			{
				accessorKey: 'status',
				header: 'Status',
				footer: (props) => props.column.id
			},
			{
				accessorKey: 'progress',
				header: 'Profile Progress',
				footer: (props) => props.column.id
			}
		]
	}
];

export const getTableMeta = (
	setData: Dispatch<SetStateAction<Person[]>>,
	skipAutoResetPageIndex: () => void
) =>
	({
		updateData: (rowIndex, columnId, value) => {
			// Skip age index reset until after next rerender
			skipAutoResetPageIndex();
			setData((old) =>
				old.map((row, index) => {
					if (index !== rowIndex) return row;

					return {
						...old[rowIndex]!,
						[columnId]: value
					};
				})
			);
		}
	}) as TableMeta;
