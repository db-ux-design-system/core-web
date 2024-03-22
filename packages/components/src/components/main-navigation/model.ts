import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBehaviourState
} from '../../shared/model';

export interface DBMainNavigationDefaultProps {}

export type DBMainNavigationProps = DBMainNavigationDefaultProps & GlobalProps;

export interface DBMainNavigationDefaultState {
	forceClose: boolean;
}

export type DBMainNavigationState = DBMainNavigationDefaultState &
	InitializedState &
	GlobalState &
	NavigationBehaviourState;
