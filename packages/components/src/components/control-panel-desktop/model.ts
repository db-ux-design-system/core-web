import {
	ContainerWidthProps,
	ControlPanelProps,
	GlobalProps,
	GlobalState,
	MaterialProps,
	OrientationProps,
	ResetIdState,
	SidebarProps,
	SidebarState,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelDesktopDefaultProps = {};

export type DBControlPanelDesktopProps = DBControlPanelDesktopDefaultProps &
	GlobalProps &
	MaterialProps &
	ContainerWidthProps &
	ControlPanelProps &
	OrientationProps &
	SidebarProps;

export type DBControlPanelDesktopDefaultState = {
	syncExpanded: () => void;
};

export type DBControlPanelDesktopState = DBControlPanelDesktopDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState &
	ResetIdState;
