import {
	CollapsableBehaviorPops,
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationItemGroupVariant,
	OverflowScrollButtonProps,
	OverflowScrollButtonState
} from '../../shared/model';

export type DBControlPanelNavigationDefaultProps = {
	/**
	 * Show or hide the tree line connecting nested navigation items in tree variant.
	 * @default true
	 */
	showTreeLine?: boolean | string;
};

export type DBControlPanelNavigationProps =
	DBControlPanelNavigationDefaultProps &
		GlobalProps &
		OverflowScrollButtonProps &
		NavigationItemGroupVariant &
		CollapsableBehaviorPops;

export type DBControlPanelNavigationDefaultState = {
	onScroll: () => void;
	_shellDesktopPosition?: string | null;
	_subNavigationDesktopPosition?: string | null;
	_handleSubNavigation: () => void;
	_handleTreeKeyDown: (event: any) => void;
	_handleTreeKeys: (event: any) => void;
	_handlePopoverKeys: (event: any) => void;
	_focusParentGroupButton: (activeElement: HTMLElement) => boolean;
	_closeSubMenuAndReturnToParent: (parentGroupMenu: Element) => void;
	_isSubNavigation?: boolean;
	_resizeObserverCallbackId?: string;
	_singleBehaviorObserver?: MutationObserver;
	_attachSingleBehaviorObserver: () => void;
};

export type DBControlPanelNavigationState =
	DBControlPanelNavigationDefaultState &
		GlobalState &
		OverflowScrollButtonState &
		InitializedState;
