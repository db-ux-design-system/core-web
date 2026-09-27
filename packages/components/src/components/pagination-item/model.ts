import type { GlobalProps, GlobalState, TextProps } from '../../shared/model';

export type DBPaginationItemDefaultProps = {};

export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	TextProps;

export type DBPaginationItemDefaultState = {};

export type DBPaginationItemState = DBPaginationItemDefaultState & GlobalState;
