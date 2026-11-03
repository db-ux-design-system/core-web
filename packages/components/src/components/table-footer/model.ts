import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';
import type { DBTableRowProps } from '../table-row/model';

export type DBTableFooterDefaultProps = {
	rows?: DBTableRowProps[];
};

export type DBTableFooterProps = DBTableFooterDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBTableFooterDefaultState = {};

export type DBTableFooterState = DBTableFooterDefaultState & GlobalState;
