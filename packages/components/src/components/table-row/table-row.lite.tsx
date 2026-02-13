import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import DBTableDataCell from '../table-data-cell/table-data-cell.lite';
import { DBTableHeaderCellProps } from '../table-header-cell/model';
import DBTableHeaderCell from '../table-header-cell/table-header-cell.lite';
import { DBTableRowCell, DBTableRowProps, DBTableRowState } from './model';

useMetadata({});

useDefaultProps<DBTableRowProps>({});

export default function DBTableRow(props: DBTableRowProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableRowElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableRowState>({});

	// jscpd:ignore-end

	return (
		<tr
			ref={_ref}
			id={props.id}
			class={cls('db-table-row', props.className)}
			data-sub-header-emphasis={props.subHeaderEmphasis}>
			<Show when={props.cells} else={props.children}>
				<For each={props.cells}>
					{(cell: DBTableRowCell, index: number) => (
						<Show
							when={cell.headerCell}
							else={
								<DBTableDataCell
									key={`${props.id ?? uuid()}-table-row-data-cell-${index}`}
									id={cell.id}
									className={cell.className ?? cell.class}
									alignment={cell.alignment}
									headers={cell.headers}
									colSpan={cell.colSpan}
									colspan={cell.colspan}
									rowSpan={cell.rowSpan}
									rowspan={cell.rowspan}>
									{cell.content}
								</DBTableDataCell>
							}>
							<DBTableHeaderCell
								key={`${props.id ?? uuid()}-table-row-header-cell-${index}`}
								id={cell.id}
								abbr={(cell as DBTableHeaderCellProps).abbr}
								scope={(cell as DBTableHeaderCellProps).scope}
								className={cell.className ?? cell.class}
								alignment={cell.alignment}
								headers={cell.headers}
								colSpan={cell.colSpan}
								colspan={cell.colspan}
								rowSpan={cell.rowSpan}
								rowspan={cell.rowspan}>
								{cell.content}
							</DBTableHeaderCell>
						</Show>
					)}
				</For>
			</Show>
		</tr>
	);
}
