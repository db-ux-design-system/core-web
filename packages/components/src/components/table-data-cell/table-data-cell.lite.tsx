import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getNumber } from '../../utils';
import { DBTableDataCellProps } from './model';

useMetadata({});

useDefaultProps<DBTableDataCellProps>({});

export default function DBTableDataCell(props: DBTableDataCellProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableCellElement | any>(undefined);
	return (
		<td
			ref={_ref}
			id={props.id}
			class={cls('db-table-data-cell', props.className)}
			data-horizontal-alignment={props.horizontalAlignment}
			data-vertical-alignment={props.verticalAlignment}
			colSpan={getNumber(props.colSpan, props.colspan)}
			rowSpan={getNumber(props.rowSpan, props.rowspan)}
			headers={props.headers}>
			{props.children}
		</td>
	);
}
