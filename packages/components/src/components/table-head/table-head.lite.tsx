import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBTableRowCell, DBTableRowProps } from '../table-row/model';
import DBTableRow from '../table-row/table-row.lite';
import { DBTableHeadProps, DBTableHeadState } from './model';

useMetadata({});

useDefaultProps<DBTableHeadProps>({});

export default function DBTableHead(props: DBTableHeadProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableSectionElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableHeadState>({
		getCells: (cells?: DBTableRowCell[]) => {
			return cells?.map((cell) => ({
				...cell,
				headerCell: true
			}));
		}
	});
	// jscpd:ignore-end

	return (
		<thead
			ref={_ref}
			id={props.id}
			class={cls('db-table-head', props.className)}>
			<Show when={props.rows} else={props.children}>
				<For each={props.rows}>
					{(row: DBTableRowProps, index: number) => (
						<DBTableRow
							key={`${props.id ?? uuid()}-table-head-row-${index}`}
							cells={state.getCells(row.cells)}
							className={row.className ?? row.class}
							subHeaderEmphasis={row.subHeaderEmphasis}
							id={row.id}
						/>
					)}
				</For>
			</Show>
		</thead>
	);
}
