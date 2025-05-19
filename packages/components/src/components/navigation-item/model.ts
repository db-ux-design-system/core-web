import {
	DisabledProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	WidthProps
} from '../../shared/model';

export type DBNavigationItemDefaultProps = {
	/**
	 * Alternative indicator for active navigation item (bold font). In contrast to the use of aria-current="page" on the contained anchor, this does not guarantee correct a11y.
	 */
	active?: boolean;

	/**
	 * Determines whether the text should wrap when its parent container is too small, preventing overflow.
	 */
	wrap?: boolean | string;

	/**
	 * If you use DBShell with controlPanelDesktopPosition="left" you need
	 * to add a tooltip for collapsed navigation
	 */
	tooltip?: string;
};

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	IconProps &
	WidthProps &
	ShowIconProps &
	DisabledProps;

export type DBNavigationItemDefaultState = {};

export type DBNavigationItemState = DBNavigationItemDefaultState & GlobalState;
