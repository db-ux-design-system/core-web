import type { GlobalProps, GlobalState, TextProps } from '../../shared/model';

export type DBPaginationItemDefaultProps = {
	disabled?: boolean | string;
};

export type DBPaginationItemProps = DBPaginationItemDefaultProps &
	GlobalProps &
	TextProps;

export type DBPaginationItemState = GlobalState;
