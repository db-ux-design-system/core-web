import type {
	ActiveProps,
	DisabledProps,
	EndSlotProps,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	ShowIconProps,
	TextProps
} from '../../shared/model';

export type DBControlPanelNavigationItemDefaultProps = {
	/**
	 * If you use DBShell with controlPanelDesktopPosition="left" or DBControlPanelFlatIcon
	 * you need to add a tooltip for collapsed navigation
	 */
	tooltip?: string;
} & ActiveProps &
	EndSlotProps &
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
	DBControlPanelNavigationItemDefaultState & GlobalState & InitializedState;
