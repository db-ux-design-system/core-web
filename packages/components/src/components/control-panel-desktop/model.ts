import {
	ContainerWidthProps,
	ContentPanelProps,
	GlobalProps,
	GlobalState,
	OrientationProps,
	SidebarState,
	ToggleEventState
} from '../../shared/model';

export type DBControlPanelDesktopDefaultProps = {
	/**
	 * Change the default text of the toggle button for collapse.
	 */
	leftPositionToggleButtonCollapse?: string;
	/**
	 * Change the default text of the toggle button for expand.
	 */
	leftPositionToggleButtonExpand?: string;
};

export type DBControlPanelDesktopProps = DBControlPanelDesktopDefaultProps &
	GlobalProps &
	ContainerWidthProps &
	ContentPanelProps &
	OrientationProps;

export type DBControlPanelDesktopDefaultState = object;

export type DBControlPanelDesktopState = DBControlPanelDesktopDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState;
