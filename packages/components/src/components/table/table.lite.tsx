import {
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, delay, getBooleanAsString } from '../../utils';
import DBTableBody from '../table-body/table-body.lite';
import DBTableFooter from '../table-footer/table-footer.lite';
import DBTableHead from '../table-head/table-head.lite';
import { DBTableData, DBTableProps, DBTableState } from './model';

useMetadata({});

useDefaultProps<DBTableProps>({});

export default function DBTable(props: DBTableProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBTableState>({
		_data: undefined,
		convertData: (): DBTableData => {
			try {
				if (typeof props.data === 'string') {
					return JSON.parse(props.data as string);
				}

				return props.data as DBTableData;
			} catch (error) {
				console.error(error);
			}

			return {};
		}
	});

	onUpdate(() => {
		if (props.data) {
			state._data = state.convertData();
		}
	}, [props.data]);

	onUpdate(() => {
		if (_ref && props.mobileVariant === 'list') {
			// Delay for angular
			void delay(() => {
				const table = _ref as HTMLTableElement;
				const headerCells = table.querySelectorAll('thead tr th');
				if (headerCells.length) {
					const otherRows = table.querySelectorAll(
						':is(tbody,tfoot) tr'
					);
					otherRows.forEach((row) => {
						const cells = row.querySelectorAll(':is(td,th)');
						cells.forEach((cell, index) => {
							const headerCell = headerCells[index];
							if (headerCell && headerCell.textContent) {
								cell.setAttribute(
									'data-header',
									headerCell.textContent
								);
							}
						});
					});
				}
			}, 1);
		}
	}, [props.mobileVariant, _ref]);

	// jscpd:ignore-end

	return (
		<div
			class={cls('db-table', props.className)}
			data-size={props.size}
			data-divider={props.divider}
			data-variant={props.variant}
			data-mobile-variant={props.mobileVariant}
			data-show-caption={getBooleanAsString(props.showCaption)}
			data-row-style={props.rowStyle}>
			<table ref={_ref} id={props.id}>
				<caption>
					<Show
						when={props.captionPlain}
						else={<Slot name="caption" />}>
						{props.captionPlain}
					</Show>
				</caption>
				<Show when={state._data} else={props.children}>
					<Show when={state._data?.header}>
						<DBTableHead rows={state._data?.header} />
					</Show>
					<Show when={state._data?.body}>
						<DBTableBody rows={state._data?.body} />
					</Show>
					<Show when={state._data?.footer}>
						<DBTableFooter rows={state._data?.footer} />
					</Show>
				</Show>
			</table>
		</div>
	);
}
