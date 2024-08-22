import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBNavigationDefaultProps {}

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	AriaLabelledByProps;

export interface DBNavigationDefaultState {}

export type DBNavigationState = DBNavigationDefaultState & GlobalState;
