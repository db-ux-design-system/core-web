import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getNumber } from '../../utils';
import { DBTableDataCellProps, DBTableDataCellState } from './model';

useMetadata({});

useDefaultProps<DBTableDataCellProps>({});

export default function DBTableDataCell(props: DBTableDataCellProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableCellElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableDataCellState>({});
	// jscpd:ignore-end

	return (
		<td
			ref={_ref}
			id={props.id}
			class={cls('db-table-data-cell', props.className)}
			data-alignment={props.alignment}
			colSpan={getNumber(props.colSpan, props.colspan)}
			rowSpan={getNumber(props.rowSpan, props.rowspan)}
			headers={props.headers}>
			{props.children}
		</td>
	);
}
