import { GlobalProps, GlobalState } from '../../shared/model';
import { DBTableRowProps } from '../table-row/model';

export type DBTableBodyDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableBodyProps = DBTableBodyDefaultProps & GlobalProps;

export type DBTableBodyDefaultState = {};

export type DBTableBodyState = DBTableBodyDefaultState & GlobalState;
