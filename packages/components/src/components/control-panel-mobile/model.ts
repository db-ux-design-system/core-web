import {
	ControlPanelProps,
	GlobalProps,
	GlobalState,
	NavigationBehaviorState,
	ShellControlPanelMobilePositionType,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelMobileDefaultProps = {
	/**
	 * Text to pass in a headline for the drawer header.
	 */
	drawerHeaderText?: string;

	/**
	 * This attribute sets the label for the burger menu button for mobile control-panel-desktops.
	 */
	burgerMenuLabel?: string;
	/**
	 * Change the position of the mobile content panel
	 */
	position?: ShellControlPanelMobilePositionType;

	/**
	 * Optional flat icon navigation for a mobile app look. Only visible by using variant="flat-icon" as well.
	 */
	flatIconNavigation?: any;
};

export type DBControlPanelMobileProps = DBControlPanelMobileDefaultProps &
	GlobalProps &
	ToggleEventProps &
	ControlPanelProps;

export type DBControlPanelMobileDefaultState = {
	open: boolean;
};

export type DBControlPanelMobileState = DBControlPanelMobileDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	NavigationBehaviorState;
