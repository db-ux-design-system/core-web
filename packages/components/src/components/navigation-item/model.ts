import type {
	DisabledProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	StartSlotProps,
	TextProps,
	WrapProps
} from '../../shared/model';

export type DBNavigationItemDefaultProps = {
	/**
	 * Alternative indicator for active navigation item (bold font). In contrast to the use of aria-current="page" on the contained anchor, this does not guarantee correct a11y.
	 */
	active?: boolean;

	/**
	 * If you use DBShell with controlPanelDesktopPosition="left" you need
	 * to add a tooltip for collapsed navigation
	 */
	tooltip?: string;

	/**
	 * Set the text for the navigation-item
	 */
	text?: string;

	/**
	 * Force hide sub-navigation - for web component output
	 */
	hideSubNavigation?: boolean | string;
} & StartSlotProps &
	EndSlotProps;

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	IconProps &
	ShowIconProps &
	WrapProps &
	DisabledProps &
	TextProps;

export type DBNavigationItemDefaultState = {};

export type DBNavigationItemState = DBNavigationItemDefaultState & GlobalState;
