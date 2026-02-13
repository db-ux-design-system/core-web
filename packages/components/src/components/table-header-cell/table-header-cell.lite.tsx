import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getNumber } from '../../utils';
import { DBTableHeaderCellProps, DBTableHeaderCellState } from './model';

useMetadata({});

useDefaultProps<DBTableHeaderCellProps>({});

export default function DBTableHeaderCell(props: DBTableHeaderCellProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableCellElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableHeaderCellState>({});
	// jscpd:ignore-end

	return (
		<th
			ref={_ref}
			id={props.id}
			class={cls('db-table-header-cell', props.className)}
			data-alignment={props.alignment}
			scope={props.scope}
			colSpan={getNumber(props.colSpan, props.colspan)}
			rowSpan={getNumber(props.rowSpan, props.rowspan)}
			headers={props.headers}
			abbr={props.abbr}>
			{props.children}
		</th>
	);
}
