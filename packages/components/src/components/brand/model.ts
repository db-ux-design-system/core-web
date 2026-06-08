import type {
	GlobalProps,
	GlobalState,
	NoTextProps,
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
	TextProps &
	NoTextProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
