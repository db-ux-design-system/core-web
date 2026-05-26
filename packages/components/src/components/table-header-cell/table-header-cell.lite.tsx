import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString, getNumber } from '../../utils';
import { DBTableHeaderCellProps } from './model';

useMetadata({});

useDefaultProps<DBTableHeaderCellProps>({});

export default function DBTableHeaderCell(props: DBTableHeaderCellProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableCellElement | any>(undefined);
	return (
		<th
			ref={_ref}
			id={props.id}
			class={cls('db-table-header-cell', props.className)}
			data-horizontal-alignment={props.horizontalAlignment}
			data-vertical-alignment={props.verticalAlignment}
			data-no-text={getBooleanAsString(props.noText)}
			scope={props.scope}
			colSpan={getNumber(props.colSpan, props.colspan)}
			rowSpan={getNumber(props.rowSpan, props.rowspan)}
			headers={props.headers}
			abbr={props.abbr}>
			{props.children}
		</th>
	);
}
