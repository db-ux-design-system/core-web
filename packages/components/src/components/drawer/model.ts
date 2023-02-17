import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBDrawerDefaultProps {
	open?: boolean;
	slotDrawerHeader?: any;
}

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps;

export interface DBDrawerDefaultState {}

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
