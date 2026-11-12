import type {
	GlobalProps,
	GlobalState,
	IconProps,
	MaterialProps,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export type DBBrandDefaultProps = {
	/**
	 * @deprecated: Disable the default logo svg to pass in a custom `img`
	 */
	hideLogo?: boolean;
};

export type DBBrandProps = DBBrandDefaultProps &
	GlobalProps &
	Pick<MaterialProps, 'color'> &
	IconProps &
	ShowIconProps &
	TextProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
