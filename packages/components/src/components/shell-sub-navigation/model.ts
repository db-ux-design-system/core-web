import {
	GlobalProps,
	GlobalState,
	SidebarProps,
	SidebarState,
	ToggleEventState
} from '../../shared/model';

export type DBShellSubNavigationDefaultProps = {};

export type DBShellSubNavigationProps = DBShellSubNavigationDefaultProps &
	GlobalProps &
	SidebarProps;

export type DBShellSubNavigationDefaultState = {
	syncExpanded: () => void;
};

export type DBShellSubNavigationState = DBShellSubNavigationDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState;
