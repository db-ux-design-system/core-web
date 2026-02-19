import {
	sortingFns,
	type ColumnDef,
	type FilterFn,
	type SortingFn
} from '@tanstack/angular-table';
import {
	compareItems,
	rankItem,
	type RankingInfo
} from '@tanstack/match-sorter-utils';
import type { Person } from './makeData';

export const fuzzyFilter: FilterFn<Person> = (
	row,
	columnId,
	value,
	addMeta
) => {
	const itemRank = rankItem(row.getValue(columnId), value);
	addMeta(itemRank);
	return itemRank.passed;
};

export const fuzzySort: SortingFn<Person> = (rowA, rowB, columnId) => {
	let dir = 0;
	if (rowA.columnFiltersMeta[columnId]) {
		dir = compareItems(
			rowA.columnFiltersMeta[columnId]! as RankingInfo,
			rowB.columnFiltersMeta[columnId]! as RankingInfo
		);
	}
	return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

export type TableMeta = {
	updateData: (rowIndex: number, columnId: string, value: unknown) => void;
};

export const columns: ColumnDef<Person>[] = [
	{
		id: 'select',
		header: 'select-header',
		cell: 'select-cell',
		footer: 'select-footer'
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
