import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBTableRowProps } from '../table-row/model';
import DBTableRow from '../table-row/table-row.lite';
import { DBTableFooterProps } from './model';

useMetadata({});

useDefaultProps<DBTableFooterProps>({});

export default function DBTableFooter(props: DBTableFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableSectionElement | any>(undefined);
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
