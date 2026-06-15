import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationItemGroupVariant,
	NavigationItemGroupVariantType,
	OverflowScrollButtonProps,
	OverflowScrollButtonState
} from '../../shared/model';

export type DBNavigationDefaultProps = {
	showTreeLine?: boolean | string;
};

export type DBNavigationProps = DBNavigationDefaultProps &
	GlobalProps &
	OverflowScrollButtonProps &
	NavigationItemGroupVariant;

export type DBNavigationDefaultState = {
	onScroll: () => void;
	_variant?: NavigationItemGroupVariantType;
	_shellDesktopPosition?: string | null;
	_subNavigationDesktopPosition?: string | null;
	_handleSubNavigation: () => void;
	_isSubNavigation?: boolean;
};

export type DBNavigationState = DBNavigationDefaultState &
	GlobalState &
	OverflowScrollButtonState &
	InitializedState;
