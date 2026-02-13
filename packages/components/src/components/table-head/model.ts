import { GlobalProps, GlobalState } from '../../shared/model';
import { DBTableRowCell, DBTableRowProps } from '../table-row/model';

export type DBTableHeadDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableHeadProps = DBTableHeadDefaultProps & GlobalProps;

export type DBTableHeadDefaultState = {
	getCells: (cells?: DBTableRowCell[]) => DBTableRowCell[] | undefined;
};

export type DBTableHeadState = DBTableHeadDefaultState & GlobalState;
