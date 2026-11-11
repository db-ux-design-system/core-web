import {
	ControlPanelProps,
	DrawerHeaderSlotProps,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	NavigationBehaviorState,
	ShellControlPanelMobilePositionType,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelMobileDefaultProps = {
	/**
	 * Sets the accessible label for the burger menu button of the mobile control panel.
	 */
	burgerMenuLabel?: string;
	/**
	 * Change the position of the mobile content panel
	 */
	position?: ShellControlPanelMobilePositionType;
};

export type DBControlPanelMobileProps = DBControlPanelMobileDefaultProps &
	GlobalProps &
	DrawerHeaderSlotProps &
	InnerCloseButtonProps &
	ToggleEventProps &
	ControlPanelProps;

export type DBControlPanelMobileDefaultState = {
	open: boolean;
	handleClose: (event: any) => void;
};

export type DBControlPanelMobileState = DBControlPanelMobileDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	NavigationBehaviorState;
