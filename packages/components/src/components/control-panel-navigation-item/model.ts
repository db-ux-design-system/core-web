import type {
	DisabledProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	StartSlotProps,
	TextProps
} from '../../shared/model';

export type DBControlPanelNavigationItemDefaultProps = {
	/**
	 * Alternative indicator for active navigation item (bold font). In contrast to the use of aria-current="page" on the contained anchor, this does not guarantee correct a11y.
	 */
	active?: boolean;

	/**
	 * If you use DBShell with controlPanelDesktopPosition="left" or DBControlPanelFlatIcon
	 * you need to add a tooltip for collapsed navigation
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

export type DBControlPanelNavigationItemProps =
	DBControlPanelNavigationItemDefaultProps &
		GlobalProps &
		IconProps &
		ShowIconProps &
		DisabledProps &
		TextProps;

export type DBControlPanelNavigationItemDefaultState = {
	_tooltip?: string;
};

export type DBControlPanelNavigationItemState =
	DBControlPanelNavigationItemDefaultState & GlobalState;
