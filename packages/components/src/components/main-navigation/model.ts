import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';

export interface DBMainNavigationDefaultProps {}

export type DBMainNavigationProps = DBMainNavigationDefaultProps & GlobalProps;

export interface DBMainNavigationDefaultState {
	mainNavigationId: string;
}

export type DBMainNavigationState = DBMainNavigationDefaultState &
	GlobalState &
	InitializedState;
