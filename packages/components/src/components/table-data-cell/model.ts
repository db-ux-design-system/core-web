import type {
	DBTableCellProps,
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBTableDataCellDefaultProps = {};

export type DBTableDataCellProps = DBTableDataCellDefaultProps &
	GlobalProps &
	MaterialProps &
	DBTableCellProps;

export type DBTableDataCellDefaultState = {};

export type DBTableDataCellState = DBTableDataCellDefaultState & GlobalState;
