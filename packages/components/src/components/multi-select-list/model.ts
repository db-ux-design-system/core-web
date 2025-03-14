import { GlobalProps, GlobalState } from '../../shared/model';

export type DBMultiSelectListDefaultProps = {
	label?: string;
	multiple?: boolean;
};

export type DBMultiSelectListProps = DBMultiSelectListDefaultProps &
	GlobalProps;

export type DBMultiSelectListDefaultState = {};

export type DBMultiSelectListState = DBMultiSelectListDefaultState &
	GlobalState;
