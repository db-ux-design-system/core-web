import { AlignmentProps, DBTableCellProps, GlobalProps, GlobalState } from '../../shared/model';

export type DBTableDataCellDefaultProps = {};

export type DBTableDataCellProps = DBTableDataCellDefaultProps &
	GlobalProps &
	DBTableCellProps & AlignmentProps;

export type DBTableDataCellDefaultState = {};

export type DBTableDataCellState = DBTableDataCellDefaultState & GlobalState;
