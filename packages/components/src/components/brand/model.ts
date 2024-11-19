import { GlobalProps, GlobalState, IconProps } from '../../shared/model';

export type DBBrandDefaultProps = {
	/**
	 * Disable the default logo svg to pass in a custom `img`
	 */
	hideLogo?: boolean;
};

export type DBBrandProps = DBBrandDefaultProps & GlobalProps & IconProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
