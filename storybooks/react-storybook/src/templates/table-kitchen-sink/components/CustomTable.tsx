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
} from '@components';
import {
	flexRender,
	type HeaderGroup,
	type Row,
	type RowData,
	type Table
} from '@tanstack/react-table';
import Filter from './Filter';

function getTableHeaderGroups<T extends RowData>(
	table: Table<T>
): [HeaderGroup<T>[], HeaderGroup<T>[]] {
	return [table.getHeaderGroups(), table.getFooterGroups()];
}

function getRowGroup<T extends RowData>(row: Row<T>) {
	return row.getVisibleCells();
}

type Props<T extends RowData> = {
	table: Table<T>;
};

export function CustomTable<T extends RowData>({ table }: Props<T>) {
	const [headerGroups, footerGroup] = getTableHeaderGroups(table);

	return (
		<DBTable
			columnSizes={{
				0: 'min-content',
				4: 'min-content',
				5: 'min-content'
			}}>
			<DBTableHead>
				{headerGroups.map((headerGroup) => (
					<DBTableRow interactive key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<DBTableHeaderCell
								className="relative"
								key={header.id}
								colSpan={header.colSpan}>
								{header.isPlaceholder ? null : (
									<div
										style={{
											display: 'inline-flex',
											gap: 'var(--db-spacing-fixed-3xs)',
											overflow: 'hidden',
											inlineSize: 'fit-content',
											blockSize: 'fit-content'
										}}>
										<span style={{ whiteSpace: 'nowrap' }}>
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
										</span>
										{header.column.getCanSort() && (
											<DBButton
												variant="ghost"
												size="small"
												onClick={header.column.getToggleSortingHandler()}
												noText
												icon={
													header.column.getIsSorted()
														? header.column.getIsSorted() ===
															'asc'
															? 'sort_down'
															: 'sort_up'
														: 'arrows_vertical'
												}>
												<DBTooltip placement="top">
													{header.column.getIsSorted()
														? header.column.getIsSorted() ===
															'asc'
															? 'Sort descending'
															: 'Sort ascending'
														: 'Sort ascending'}
												</DBTooltip>
											</DBButton>
										)}

										{header.column.getCanFilter() ? (
											<Filter
												column={header.column}
												table={table}
											/>
										) : null}
									</div>
								)}
							</DBTableHeaderCell>
						))}
					</DBTableRow>
				))}
			</DBTableHead>
			<DBTableBody>
				{table.getRowModel().rows.map((row) => (
					<DBTableRow interactive key={row.id}>
						{getRowGroup(row).map((cell) => (
							<DBTableDataCell key={cell.id}>
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext()
								)}
							</DBTableDataCell>
						))}
					</DBTableRow>
				))}
			</DBTableBody>
			<DBTableFooter>
				{footerGroup.map((footerGroup) => (
					<DBTableRow key={footerGroup.id}>
						{footerGroup.headers.map((header) => (
							<DBTableHeaderCell
								key={header.id}
								colSpan={header.colSpan}>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.footer,
											header.getContext()
										)}
							</DBTableHeaderCell>
						))}
					</DBTableRow>
				))}
			</DBTableFooter>
		</DBTable>
	);
}

export default CustomTable;
