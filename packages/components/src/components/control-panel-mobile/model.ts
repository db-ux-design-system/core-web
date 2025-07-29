import {
	ContainerWidthProps,
	ControlPanelProps,
	GlobalProps,
	GlobalState,
	NavigationBehaviorState,
	ShellControlPanelMobilePositionType,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export const ShellControlPanelMobileVariant = ['drawer', 'flat-icon'] as const;
export type ShellControlPanelMobileVariantType =
	(typeof ShellControlPanelMobileVariant)[number];

export type DBControlPanelMobileDefaultProps = {
	/**
	 * Text to pass in a headline for the drawer header.
	 */
	drawerHeadlinePlain?: string;

	/**
	 * This attribute sets the label for the burger menu button for mobile control-panel-desktops.
	 */
	burgerMenuLabel?: string;
	/**
	 * Change the position of the mobile content panel
	 */
	position?: ShellControlPanelMobilePositionType;

	/**
	 * Change the variant of the mobile content panel
	 */
	variant?: ShellControlPanelMobileVariantType;

	/**
	 * Optional flat icon navigation for a mobile app look. Only visible by using variant="flat-icon" as well.
	 */
	flatIconNavigation?: any;
};

export type DBControlPanelMobileProps = DBControlPanelMobileDefaultProps &
	GlobalProps &
	ToggleEventProps &
	ContainerWidthProps &
	ControlPanelProps;

export type DBControlPanelMobileDefaultState = {
	open: boolean;
};

export type DBControlPanelMobileState = DBControlPanelMobileDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	NavigationBehaviorState;
