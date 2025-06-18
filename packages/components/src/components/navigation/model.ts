import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState, InitializedState,
	NavigationItemGroupVariant,
	NavigationItemGroupVariantType,
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
	_variant?: NavigationItemGroupVariantType;
	_shellDesktopPosition?: string | null;
};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	OverflowScrollButtonState & InitializedState;
