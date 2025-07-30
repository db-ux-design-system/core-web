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

export type DBShellSubNavigationDefaultState = {};

export type DBShellSubNavigationState = DBShellSubNavigationDefaultState &
	GlobalState &
	ToggleEventState<HTMLButtonElement> &
	SidebarState;
