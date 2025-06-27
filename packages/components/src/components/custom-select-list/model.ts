import { GlobalProps, GlobalState } from '../../shared/model';

export type DBCustomSelectListDefaultProps = {
	label?: string;
	multiple?: boolean;
};

export type DBCustomSelectListProps = DBCustomSelectListDefaultProps &
	GlobalProps;

export type DBCustomSelectListDefaultState = {};

export type DBCustomSelectListState = DBCustomSelectListDefaultState &
	GlobalState;
