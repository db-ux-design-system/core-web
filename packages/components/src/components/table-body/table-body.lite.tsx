import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBTableRowProps } from '../table-row/model';
import DBTableRow from '../table-row/table-row.lite';
import { DBTableBodyProps, DBTableBodyState } from './model';

useMetadata({});

useDefaultProps<DBTableBodyProps>({});

export default function DBTableBody(props: DBTableBodyProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableSectionElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableBodyState>({});
	// jscpd:ignore-end

	return (
		<tbody
			ref={_ref}
			id={props.id}
			class={cls('db-table-body', props.className)}>
			<Show when={props.rows} else={props.children}>
				<For each={props.rows}>
					{(row: DBTableRowProps, index: number) => (
						<DBTableRow
							key={`${props.id ?? uuid()}-table-body-row-${index}`}
							cells={row.cells}
							className={row.className ?? row.class}
							id={row.id}
						/>
					)}
				</For>
			</Show>
		</tbody>
	);
}
