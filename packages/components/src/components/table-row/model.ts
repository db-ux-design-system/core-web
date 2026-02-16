import { GlobalProps, GlobalState } from '../../shared/model';
import { DBTableDataCellProps } from '../table-data-cell/model';
import { DBTableHeaderCellProps } from '../table-header-cell/model';

export const DBTableRowSubHeaderEmphasisList = ['weak', 'strong'] as const;
export type DBTableRowSubHeaderEmphasisType =
	(typeof DBTableRowSubHeaderEmphasisList)[number];

export type DBTableRowCell = (DBTableHeaderCellProps | DBTableDataCellProps) & {
	headerCell?: boolean;
	content: any;
};

export type DBTableRowDefaultProps = {
	/**
	 * All cells of the row
	 */
	cells?: DBTableRowCell[];
	/**
	 * Change styling of row only if it is inside thead
	 */
	subHeaderEmphasis?: DBTableRowSubHeaderEmphasisType;

	/**
	 * If true marks the row as interactive, which checks for child with data-table-row-action="true"
	 */
	interactive?: boolean| string;
};

export type DBTableRowProps = DBTableRowDefaultProps & GlobalProps;

export type DBTableRowDefaultState = {};

export type DBTableRowState = DBTableRowDefaultState & GlobalState;
