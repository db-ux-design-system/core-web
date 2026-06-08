import { IconTypes } from '@db-ux/core-foundations';
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
	/**
	 * @deprecated: Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
	 */
	icon?: IconTypes;
	/**
	 * @deprecated: Enables or disables the visibility of the icon. The default value depends on the component.
	 * For many components this property is optional to reflect Figma properties.
	 */
	showIcon?: boolean | string;
};

export type DBBrandProps = DBBrandDefaultProps &
	GlobalProps &
	TextProps &
	NoTextProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
