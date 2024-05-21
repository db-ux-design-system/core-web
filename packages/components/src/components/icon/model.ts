import { GlobalProps, GlobalState, IconProps } from '../../shared/model';

export const IconVariantList = ['default', 'inverted', 'filled'] as const;
export type IconVariantType = (typeof IconVariantList)[number];

export const IconWeightList = ['16', '20', '24', '32', '48', '64'] as const;
export type IconWeightType = (typeof IconWeightList)[number];

export type DBIconDefaultProps = {
	variant?: IconVariantType;
	weight?: IconWeightType;
};

export type DBIconProps = DBIconDefaultProps & GlobalProps & IconProps;

export type DBIconDefaultState = {};

export type DBIconState = DBIconDefaultState & GlobalState;
