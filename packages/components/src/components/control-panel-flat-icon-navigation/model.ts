import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';

export type DBControlPanelFlatIconNavigationDefaultProps = {
	noText?: string | boolean;
};

export type DBControlPanelFlatIconNavigationProps =
	DBControlPanelFlatIconNavigationDefaultProps & GlobalProps;

export type DBControlPanelFlatIconNavigationDefaultState = {};

export type DBControlPanelFlatIconNavigationState =
	DBControlPanelFlatIconNavigationDefaultState &
		GlobalState &
		InitializedState;
