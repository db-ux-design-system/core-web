import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';
import type { DBTableRowProps } from '../table-row/model';

export type DBTableBodyDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableBodyProps = DBTableBodyDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBTableBodyDefaultState = {};

export type DBTableBodyState = DBTableBodyDefaultState & GlobalState;
