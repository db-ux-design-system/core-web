import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBackButtonProps
} from '../../shared/model';

export interface DBMainNavigationDefaultProps {}

export type DBMainNavigationProps = DBMainNavigationDefaultProps &
	GlobalProps &
	NavigationBackButtonProps;

export interface DBMainNavigationDefaultState {
	mainNavigationId: string;
}

export type DBMainNavigationState = DBMainNavigationDefaultState &
	GlobalState &
	InitializedState;
