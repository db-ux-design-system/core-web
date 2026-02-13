import { AlignmentProps, DBTableCellProps, GlobalProps, GlobalState } from '../../shared/model';

export const DBTableHeaderCellScopeList = [
	'row',
	'col',
	'rowgroup',
	'colgroup'
] as const;
export type DBTableHeaderCellScopeType =
	(typeof DBTableHeaderCellScopeList)[number];

export type DBTableHeaderCellDefaultProps = {
	/**
	 * The **`abbr`** property of the HTMLTableCellElement interface indicates an abbreviation associated with the cell.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/abbr)
	 */
	abbr?: string;
	/**
	 * The **`scope`** property of the HTMLTableCellElement interface indicates the scope of a th cell.
	 *
	 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/scope)
	 */
	scope?: DBTableHeaderCellScopeType;
};

export type DBTableHeaderCellProps = DBTableHeaderCellDefaultProps &
	GlobalProps &
	DBTableCellProps & AlignmentProps;

export type DBTableHeaderCellDefaultState = {};

export type DBTableHeaderCellState = DBTableHeaderCellDefaultState &
	GlobalState;
