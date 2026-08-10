import { DBCard, DBCustomSelect, DBStack } from '@components';
import type { StockFeatures, Table } from '@tanstack/react-table';
import DebouncedInput from './DebouncedInput';

interface TableControlsProps {
	table: Table<StockFeatures, any>;
	globalFilter: string;
	setGlobalFilter: (value: string) => void;
}

export const TableControls = ({
	table,
	globalFilter,
	setGlobalFilter
}: TableControlsProps) => {
	return (
		<DBCard>
			<DBStack>
				<DebouncedInput
					value={globalFilter ?? ''}
					onChange={(value) => setGlobalFilter(String(value))}
					className="mx-1 p-2 font-lg shadow border border-block"
					placeholder="Search all columns..."
					label="Search"
				/>
				<DBCustomSelect
					label="Show Columns"
					placeholder="Show Columns"
					multiple
					values={table
						.getAllLeafColumns()
						.filter((column) => column.getIsVisible())
						.map((column) => column.id)}
					options={table.getAllLeafColumns().map((column) => {
						return { id: column.id, value: column.id };
					})}
					selectAllLabel="Toggle All"
					onOptionSelected={(values) => {
						table.getAllLeafColumns().forEach((column) => {
							column.toggleVisibility(values.includes(column.id));
						});
					}}></DBCustomSelect>
			</DBStack>
		</DBCard>
	);
};

export default TableControls;
