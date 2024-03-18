import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBehaviourProps
} from '../../shared/model';

export interface DBMainNavigationDefaultProps {}

export type DBMainNavigationProps = DBMainNavigationDefaultProps &
	GlobalProps &
	NavigationBehaviourProps;

export interface DBMainNavigationDefaultState {
	forceClose: boolean;
}

export type DBMainNavigationState = DBMainNavigationDefaultState &
	InitializedState &
	GlobalState;
