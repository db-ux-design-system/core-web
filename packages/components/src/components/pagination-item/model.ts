import type {
	GlobalProps,
	GlobalState,
	MaterialProps,
	TextProps
} from '../../shared/model';

export type DBPaginationItemDefaultProps = {};

export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	MaterialProps &
	TextProps;

export type DBPaginationItemDefaultState = {};

export type DBPaginationItemState = DBPaginationItemDefaultState & GlobalState;
