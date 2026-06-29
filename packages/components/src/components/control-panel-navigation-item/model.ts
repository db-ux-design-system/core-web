import type {
	DisabledProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
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
} & EndSlotProps &
	TextProps;

export type DBControlPanelNavigationItemProps =
	DBControlPanelNavigationItemDefaultProps &
		GlobalProps &
		IconProps &
		ShowIconProps &
		DisabledProps;

export type DBControlPanelNavigationItemDefaultState = {
	_tooltip?: string;
	_savedHref?: string;
	_role?: string;
	_attributeObserver?: MutationObserver;
};

export type DBControlPanelNavigationItemState =
	DBControlPanelNavigationItemDefaultState & GlobalState;
