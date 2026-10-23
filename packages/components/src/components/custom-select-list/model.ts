import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBCustomSelectListDefaultProps = {
	label?: string;
	multiple?: boolean;
};

export type DBCustomSelectListProps = DBCustomSelectListDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBCustomSelectListDefaultState = {};

export type DBCustomSelectListState = DBCustomSelectListDefaultState &
	GlobalState;
