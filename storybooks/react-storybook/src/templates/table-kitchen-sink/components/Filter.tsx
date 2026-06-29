import { DBButton, DBPopover, DBStack, DBTooltip } from '@components';
import type { Column, RowData, Table } from '@tanstack/react-table';
import { type FC, Fragment, useMemo } from 'react';
import DebouncedInput from './DebouncedInput';

type NumberInputProps = {
	columnFilterValue: [number, number];
	getFacetedMinMaxValues: () => [number, number] | undefined;
	setFilterValue: (updater: any) => void;
};

const NumberInput: FC<NumberInputProps> = ({
	columnFilterValue,
	getFacetedMinMaxValues,
	setFilterValue
}) => {
	const minOpt = getFacetedMinMaxValues()?.[0];
	const min = Number(minOpt ?? '');

	const maxOpt = getFacetedMinMaxValues()?.[1];
	const max = Number(maxOpt);

	return (
		<DBStack>
			<DebouncedInput
				type="number"
				min={min}
				max={max}
				value={columnFilterValue?.[0] ?? ''}
				onChange={(value) =>
					setFilterValue((old: [number, number]) => [value, old?.[1]])
				}
				label="Minimum"
				placeholder={`Min ${minOpt ? `(${min})` : ''}`}
			/>
			<DebouncedInput
				type="number"
				min={min}
				max={max}
				value={columnFilterValue?.[1] ?? ''}
				onChange={(value) =>
					setFilterValue((old: [number, number]) => [old?.[0], value])
				}
				label="Maximum"
				placeholder={`Max ${maxOpt ? `(${max})` : ''}`}
			/>
		</DBStack>
	);
};

type TextInputProps = {
	columnId: string;
	columnFilterValue: string;
	columnSize: number;
	setFilterValue: (updater: any) => void;
	sortedUniqueValues: any[];
};

const TextInput: FC<TextInputProps> = ({
	columnId,
	columnFilterValue,
	columnSize,
	setFilterValue,
	sortedUniqueValues
}) => {
	const dataListId = columnId + 'list';

	return (
		<Fragment>
			<datalist id={dataListId}>
				{sortedUniqueValues.slice(0, 5000).map((value: any) => (
					<option value={value} key={value} />
				))}
			</datalist>
			<DebouncedInput
				type="text"
				value={columnFilterValue ?? ''}
				onChange={(value) => setFilterValue(value)}
				placeholder={`Search... (${columnSize})`}
				label="Search"
				list={dataListId}
			/>
		</Fragment>
	);
};

type Props<T extends RowData> = {
	column: Column<T, unknown>;
	table: Table<T>;
};

export function Filter<T extends RowData>({ column, table }: Props<T>) {
	const firstValue = table
		.getPreFilteredRowModel()
		.flatRows[0]?.getValue(column.id);

	const columnFilterValue = column.getFilterValue();
	const uniqueValues = column.getFacetedUniqueValues();

	const sortedUniqueValues = useMemo(
		() =>
			typeof firstValue === 'number'
				? []
				: Array.from(uniqueValues.keys()).sort(),
		[uniqueValues]
	);

	return (
		<DBPopover
			placement="top"
			trigger={
				<DBButton size="small" variant="ghost" noText icon="funnel">
					Filter<DBTooltip placement="right">Filter</DBTooltip>
				</DBButton>
			}>
			{typeof firstValue === 'number' ? (
				<NumberInput
					columnFilterValue={columnFilterValue as [number, number]}
					getFacetedMinMaxValues={column.getFacetedMinMaxValues}
					setFilterValue={column.setFilterValue}
				/>
			) : (
				<TextInput
					columnId={column.id}
					columnFilterValue={columnFilterValue as string}
					columnSize={uniqueValues.size}
					setFilterValue={column.setFilterValue}
					sortedUniqueValues={sortedUniqueValues}
				/>
			)}
		</DBPopover>
	);
}

export default Filter;
