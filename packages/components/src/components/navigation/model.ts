import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationItemGroupVariant,
	OverflowScrollButtonProps,
	OverflowScrollButtonState
} from '../../shared/model';

export type DBNavigationDefaultProps = {};

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	AriaLabelledByProps &
	OverflowScrollButtonProps &
	NavigationItemGroupVariant;

export type DBNavigationDefaultState = {
	onScroll: () => void;
};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	InitializedState &
	OverflowScrollButtonState;
