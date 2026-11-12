import type {
	DBTableCellProps,
	GlobalProps,
	GlobalState,
	TextProps
} from '../../shared/model';

export type DBTableDataCellDefaultProps = {};

export type DBTableDataCellProps = DBTableDataCellDefaultProps &
	GlobalProps &
	TextProps &
	DBTableCellProps;

export type DBTableDataCellDefaultState = {};

export type DBTableDataCellState = DBTableDataCellDefaultState & GlobalState;
