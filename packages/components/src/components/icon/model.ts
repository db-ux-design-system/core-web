import { GlobalProps, GlobalState, IconProps } from '../../shared/model';

export type DBIconDefaultProps = {
	withText?: boolean;
};

export type DBIconProps = DBIconDefaultProps & GlobalProps & IconProps;

export type DBIconDefaultState = {};

export type DBIconState = DBIconDefaultState & GlobalState;
