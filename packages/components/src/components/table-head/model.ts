import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';
import type { DBTableRowCell, DBTableRowProps } from '../table-row/model';

export type DBTableHeadDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableHeadProps = DBTableHeadDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBTableHeadDefaultState = {
	getCells: (cells?: DBTableRowCell[]) => DBTableRowCell[] | undefined;
};

export type DBTableHeadState = DBTableHeadDefaultState & GlobalState;
