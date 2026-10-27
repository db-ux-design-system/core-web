import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ColorType, MaterialType } from '../../shared/model';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import DBLink from '../link/link.lite';
import DBTableDataCell from '../table-data-cell/table-data-cell.lite';
import { DBTableHeaderCellProps } from '../table-header-cell/model';
import DBTableHeaderCell from '../table-header-cell/table-header-cell.lite';
import { DBTableRowCell, DBTableRowProps, DBTableRowState } from './model';

useMetadata({});

useDefaultProps<DBTableRowProps>({});

export default function DBTableRow(props: DBTableRowProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableRowElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTableRowState>({
		getHeaderCell: (
			cell: DBTableRowCell
		): DBTableHeaderCellProps | undefined => {
			if (cell.headerCell) {
				return cell as DBTableHeaderCellProps;
			}

			return undefined;
		},
		_getMaterial: (): MaterialType | undefined => {
			if (props.material) {
				return props.material;
			}

			if (props.subHeaderEmphasis === 'weak') {
				return 'filled-3';
			}

			return undefined;
		},
		_getAltStateMaterial: (): MaterialType | undefined => {
			if (props.altStateMaterial) {
				return props.altStateMaterial;
			}

			// An interactive (selectable) row renders its checked state as the
			// alt-state surface.
			if (getBoolean(props.interactive, 'interactive')) {
				return 'filled-2';
			}

			if (props.subHeaderEmphasis === 'weak') {
				return 'filled-3';
			}

			return undefined;
		},
		_getAltStateColor: (): ColorType | undefined => {
			if (props.altStateColor) {
				return props.altStateColor;
			}

			if (getBoolean(props.interactive, 'interactive')) {
				return 'cyan';
			}

			return undefined;
		}
	});

	// jscpd:ignore-end

	return (
		<tr
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-material={state._getMaterial()}
			data-adaptive-color={props.color}
			data-alt-state-material={state._getAltStateMaterial()}
			data-alt-state-adaptive-color={state._getAltStateColor()}
			class={cls('db-table-row', props.className)}
			data-interactive={getBooleanAsString(props.interactive)}
			data-sub-header-emphasis={props.subHeaderEmphasis}>
			<Show when={props.cells} else={props.children}>
				<For each={props.cells}>
					{(cell: DBTableRowCell, index: number) => (
						<Show
							when={cell.headerCell}
							else={
								<DBTableDataCell
									key={`${cell.id ?? props.id ?? uuid()}-table-row-data-cell-${index}`}
									id={cell.id}
									className={cell.className ?? cell.class}
									horizontalAlignment={
										cell.horizontalAlignment
									}
									verticalAlignment={cell.verticalAlignment}
									headers={cell.headers}
									colSpan={cell.colSpan}
									colspan={cell.colspan}
									rowSpan={cell.rowSpan}
									rowspan={cell.rowspan}>
									<Show when={cell.link} else={cell.content}>
										<DBLink
											content={cell.link?.content}
											size={cell.link?.size}
											variant={cell.link?.variant}
											className={
												cell.link?.className ??
												cell.link?.class
											}
											id={cell.link?.id}
											autofocus={cell.link?.autofocus}
											disabled={cell.link?.disabled}
											href={cell.link?.href}
											hreflang={cell.link?.hreflang}
											target={cell.link?.target}
											rel={cell.link?.rel}
											referrerPolicy={
												cell.link?.referrerPolicy
											}
											role={cell.link?.role}
											showIcon={cell.link?.showIcon}
											text={cell.link?.text}
											wrap={cell.link?.wrap}>
											{cell.link?.children}
										</DBLink>
									</Show>
								</DBTableDataCell>
							}>
							<DBTableHeaderCell
								key={`${cell.id ?? props.id ?? uuid()}-table-row-header-cell-${index}`}
								id={cell.id}
								abbr={state.getHeaderCell(cell)?.abbr}
								scope={state.getHeaderCell(cell)?.scope}
								noText={state.getHeaderCell(cell)?.noText}
								className={cell.className ?? cell.class}
								horizontalAlignment={cell.horizontalAlignment}
								verticalAlignment={cell.verticalAlignment}
								headers={cell.headers}
								colSpan={cell.colSpan}
								colspan={cell.colspan}
								rowSpan={cell.rowSpan}
								rowspan={cell.rowspan}>
								<Show when={cell.link} else={cell.content}>
									<DBLink
										content={cell.link?.content}
										size={cell.link?.size}
										variant={cell.link?.variant}
										className={
											cell.link?.className ??
											cell.link?.class
										}
										id={cell.link?.id}
										autofocus={cell.link?.autofocus}
										disabled={cell.link?.disabled}
										href={cell.link?.href}
										hreflang={cell.link?.hreflang}
										target={cell.link?.target}
										rel={cell.link?.rel}
										referrerPolicy={
											cell.link?.referrerPolicy
										}
										role={cell.link?.role}
										showIcon={cell.link?.showIcon}
										text={cell.link?.text}
										wrap={cell.link?.wrap}>
										{cell.link?.children}
									</DBLink>
								</Show>
							</DBTableHeaderCell>
						</Show>
					)}
				</For>
			</Show>
		</tr>
	);
}
