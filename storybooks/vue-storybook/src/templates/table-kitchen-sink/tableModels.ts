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
} from '@tanstack/vue-table';
import { h, ref, watch, type Ref } from 'vue';
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

export const defaultColumn: Partial<ColumnDef<Person>> = {
	cell: ({ getValue, row: { index }, column: { id, columnDef }, table }) => {
		const initialValue = getValue();
		const value: Ref<any> = ref(initialValue);

		watch(
			() => getValue(),
			(newVal) => {
				value.value = newVal;
			}
		);

		const onBlur = () => {
			(table.options.meta as TableMeta).updateData(
				index,
				id,
				value.value
			);
		};

		return h(DBInput, {
			label: columnDef.header?.toString() || id || '',
			variant: 'floating',
			value: value.value,
			'onUpdate:value': (val: string) => {
				value.value = val;
			},
			onBlur
		});
	}
};

export const columns: ColumnDef<Person>[] = [
	{
		id: 'select',
		header: ({ table }) =>
			h(
				DBCheckbox,
				{
					'data-table-row-action': 'true',
					label: 'Select All',
					showLabel: false,
					checked: table.getIsAllRowsSelected(),
					indeterminate: table.getIsSomeRowsSelected(),
					'onUpdate:checked': (val: boolean) =>
						table.toggleAllRowsSelected(val)
				},
				() => [h(DBTooltip, { placement: 'top' }, () => 'Select All')]
			),
		cell: ({ row }) =>
			h(
				DBCheckbox,
				{
					'data-table-row-action': 'true',
					label: 'Select Row',
					showLabel: false,
					checked: row.getIsSelected(),
					indeterminate: row.getIsSomeSelected(),
					'onUpdate:checked': (val: boolean) =>
						row.toggleSelected(val)
				},
				() => [h(DBTooltip, { placement: 'top' }, () => 'Select Row')]
			),
		footer: ({ table }) => {
			const length = table.getSelectedRowModel().rows.length;
			const amount = length >= 100 ? '9+' : length.toString();
			return h(
				DBBadge,
				{
					label: `${length} Selected`,
					semantic: length > 0 ? 'informational' : 'neutral'
				},
				() => amount
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
	setData: (updater: (old: Person[]) => Person[]) => void,
	skipAutoResetPageIndex: () => void
): TableMeta => ({
	updateData: (rowIndex, columnId, value) => {
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
});
