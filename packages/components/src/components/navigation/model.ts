import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	OverflowScrollButtonProps,
	OverflowScrollButtonState
} from '../../shared/model';

export type DBNavigationDefaultProps = {};

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	AriaLabelledByProps &
	OverflowScrollButtonProps;

export type DBNavigationDefaultState = {
	onScroll: () => void;
};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	InitializedState &
	OverflowScrollButtonState;
