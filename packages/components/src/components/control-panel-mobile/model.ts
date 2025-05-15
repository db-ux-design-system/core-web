import {
	ContainerWidthProps,
	ContentPanelProps,
	GlobalProps,
	GlobalState,
	NavigationBehaviorState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelMobileDefaultProps = {
	/**
	 * Slot to pass in the DBControlPanelBrand component
	 */
	brandDrawer?: any;
	/**
	 * Open/closes the drawer for mobile control-panel-desktop or if `forceMobile` is true.
	 */
	drawerOpen?: boolean | string;

	/**
	 * This attribute sets the label for the burger menu button for mobile control-panel-desktops.
	 */
	burgerMenuLabel?: string;
};

export type DBControlPanelMobileProps = DBControlPanelMobileDefaultProps &
	GlobalProps &
	ToggleEventProps &
	ContainerWidthProps &
	ContentPanelProps;

export type DBControlPanelMobileDefaultState = {};

export type DBControlPanelMobileState = DBControlPanelMobileDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	NavigationBehaviorState;
