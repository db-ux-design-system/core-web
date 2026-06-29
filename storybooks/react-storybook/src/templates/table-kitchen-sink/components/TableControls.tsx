import { DBCard, DBCustomSelect, DBStack } from '@components';
import type { Table } from '@tanstack/react-table';
import DebouncedInput from './DebouncedInput';

interface TableControlsProps {
	table: Table<any>;
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
						.filter(({ getIsVisible }) => getIsVisible())
						.map(({ id }) => id)}
					options={table.getAllLeafColumns().map(({ id }) => {
						return { id, value: id };
					})}
					selectAllLabel="Toggle All"
					onOptionSelected={(values) => {
						table
							.getAllLeafColumns()
							.forEach(({ id, toggleVisibility }) => {
								toggleVisibility(values.includes(id));
							});
					}}></DBCustomSelect>
			</DBStack>
		</DBCard>
	);
};

export default TableControls;
