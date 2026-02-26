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
import { DBTableFooterProps, DBTableFooterState } from './model';

useMetadata({});

useDefaultProps<DBTableFooterProps>({});

export default function DBTableFooter(props: DBTableFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableSectionElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableFooterState>({});
	// jscpd:ignore-end

	return (
		<tfoot
			ref={_ref}
			id={props.id}
			class={cls('db-table-footer', props.className)}>
			<Show when={props.rows} else={props.children}>
				<For each={props.rows}>
					{(row: DBTableRowProps, index: number) => (
						<DBTableRow
							key={`${props.id ?? uuid()}-table-footer-row-${index}`}
							cells={row.cells}
							className={row.className ?? row.class}
							id={row.id}
						/>
					)}
				</For>
			</Show>
		</tfoot>
	);
}
