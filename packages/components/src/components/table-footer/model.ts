import { GlobalProps, GlobalState } from '../../shared/model';
import { DBTableRowProps } from '../table-row/model';

export type DBTableFooterDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableFooterProps = DBTableFooterDefaultProps & GlobalProps;

export type DBTableFooterDefaultState = {};

export type DBTableFooterState = DBTableFooterDefaultState & GlobalState;
