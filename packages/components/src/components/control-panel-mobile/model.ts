import {
	ContainerWidthProps,
	ContentPanelProps,
	GlobalProps,
	GlobalState,
	NavigationBehaviorState,
	ShellControlPanelMobilePositionType,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelMobileDefaultProps = {
	/**
	 * Slot to pass in the DBControlPanelBrand component
	 */
	brandDrawer?: any;

	/**
	 * This attribute sets the label for the burger menu button for mobile control-panel-desktops.
	 */
	burgerMenuLabel?: string;

	positon?: ShellControlPanelMobilePositionType;
};

export type DBControlPanelMobileProps = DBControlPanelMobileDefaultProps &
	GlobalProps &
	ToggleEventProps &
	ContainerWidthProps &
	ContentPanelProps;

export type DBControlPanelMobileDefaultState = {
	open: boolean;
};

export type DBControlPanelMobileState = DBControlPanelMobileDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	NavigationBehaviorState;
