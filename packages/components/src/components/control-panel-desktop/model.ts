import {
	ContainerWidthProps,
	ControlPanelProps,
	GlobalProps,
	GlobalState,
	OrientationProps,
	ResetIdState,
	SidebarProps,
	SidebarState,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelDesktopDefaultProps = {};

export type DBControlPanelDesktopProps = DBControlPanelDesktopDefaultProps &
	GlobalProps &
	ContainerWidthProps &
	ControlPanelProps &
	OrientationProps &
	SidebarProps;

export type DBControlPanelDesktopDefaultState = {};

export type DBControlPanelDesktopState = DBControlPanelDesktopDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState &
	ResetIdState;
