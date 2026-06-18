import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationItemGroupVariant,
	NavigationItemGroupVariantType,
	OverflowScrollButtonProps,
	OverflowScrollButtonState
} from '../../shared/model';

export type DBControlPanelNavigationDefaultProps = {
	showTreeLine?: boolean | string;
};

export type DBControlPanelNavigationProps =
	DBControlPanelNavigationDefaultProps &
		GlobalProps &
		OverflowScrollButtonProps &
		NavigationItemGroupVariant;

export type DBControlPanelNavigationDefaultState = {
	onScroll: () => void;
	_variant?: NavigationItemGroupVariantType;
	_shellDesktopPosition?: string | null;
	_subNavigationDesktopPosition?: string | null;
	_handleSubNavigation: () => void;
	_isSubNavigation?: boolean;
	_resizeObserverCallbackId?: string;
};

export type DBControlPanelNavigationState =
	DBControlPanelNavigationDefaultState &
		GlobalState &
		OverflowScrollButtonState &
		InitializedState;
