import {
	ContainerWidthProps,
	ContentPanelProps,
	GlobalProps,
	GlobalState,
	OrientationProps
} from '../../shared/model';

export type DBControlPanelDesktopDefaultProps = {};

export type DBControlPanelDesktopProps = DBControlPanelDesktopDefaultProps &
	GlobalProps &
	ContainerWidthProps &
	ContentPanelProps &
	OrientationProps;

export type DBControlPanelDesktopDefaultState = {};

export type DBControlPanelDesktopState = DBControlPanelDesktopDefaultState &
	GlobalState;
