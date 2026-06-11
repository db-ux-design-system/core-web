import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NoTextProps
} from '../../shared/model';

export type DBControlPanelFlatIconNavigationDefaultProps = {};

export type DBControlPanelFlatIconNavigationProps =
	DBControlPanelFlatIconNavigationDefaultProps & GlobalProps & NoTextProps;

export type DBControlPanelFlatIconNavigationDefaultState = {};

export type DBControlPanelFlatIconNavigationState =
	DBControlPanelFlatIconNavigationDefaultState &
		GlobalState &
		InitializedState;
