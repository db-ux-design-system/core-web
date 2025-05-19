import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState,
	InitializedState
} from '../../shared/model';

export type DBNavigationDefaultProps = {};

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	AriaLabelledByProps;

export type DBNavigationDefaultState = {};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	InitializedState;
