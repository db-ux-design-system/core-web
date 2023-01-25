import { type GlobalProps, type GlobalState } from '../../shared/model';

export type DBIconDefaultProps = {
	icon?: string;
	withText?: boolean;
};

export type DBIconProps = DBIconDefaultProps & GlobalProps;

export type DBIconDefaultState = {};

export type DBIconState = DBIconDefaultState & GlobalState;
