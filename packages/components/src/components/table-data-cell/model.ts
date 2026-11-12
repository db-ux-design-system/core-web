import type {
	DBTableCellProps,
	GlobalProps,
	GlobalState,
	MaterialProps,
	TextProps
} from '../../shared/model';

export type DBTableDataCellDefaultProps = {};

export type DBTableDataCellProps = DBTableDataCellDefaultProps &
	GlobalProps &
	MaterialProps &
	TextProps &
	DBTableCellProps;

export type DBTableDataCellDefaultState = {};

export type DBTableDataCellState = DBTableDataCellDefaultState & GlobalState;
