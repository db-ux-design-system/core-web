import {
	ContainerWidthProps,
	ControlPanelProps,
	GlobalProps,
	GlobalState,
	OrientationProps,
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

export type DBControlPanelDesktopDefaultState = {
	onScroll: () => void;
};

export type DBControlPanelDesktopState = DBControlPanelDesktopDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState;
