import {
	AriaLabelledByProps,
	GlobalProps,
	GlobalState,
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
};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	OverflowScrollButtonState;
