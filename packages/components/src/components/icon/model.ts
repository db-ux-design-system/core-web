import { GlobalProps, GlobalState, IconProps } from '../../shared/model';

export type DBIconDefaultProps = {
	variant?: 'default' | 'inverted' | 'solid';
	weight?: '16' | '20' | '24' | '32' | '48' | '64';
};

export type DBIconProps = DBIconDefaultProps & GlobalProps & IconProps;

export type DBIconDefaultState = {};

export type DBIconState = DBIconDefaultState & GlobalState;
