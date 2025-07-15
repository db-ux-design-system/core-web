import {
	GlobalProps,
	GlobalState, SidebarState, ToggleEventState
} from '../../shared/model';

export type DBShellSubNavigationDefaultProps = {

	/**
	 * Change the default text of the toggle button for collapse if you use sub-navigation with position:left.
	 */
	subNavigationToggleButtonCollapse?: string;
	/**
	 * Change the default text of the toggle button for expand if you use sub-navigation with position:left.
	 */
	subNavigationToggleButtonExpand?: string;
}

export type DBShellSubNavigationProps =
	DBShellSubNavigationDefaultProps  &
	GlobalProps
	;

export type DBShellSubNavigationDefaultState = {}

export type DBShellSubNavigationState =
	DBShellSubNavigationDefaultState &
	GlobalState&
ToggleEventState<HTMLButtonElement> &
SidebarState
	;
