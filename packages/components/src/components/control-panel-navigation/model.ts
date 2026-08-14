import {
	CollapsibleBehaviorProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationItemGroupVariant,
	NavigationItemGroupVariantType,
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
		CollapsibleBehaviorProps;

export type DBControlPanelNavigationDefaultState = {
	onScroll: () => void;
	_variant?: NavigationItemGroupVariantType;
	_isMobile?: boolean;
	_isShellSubNavigationMobile?: boolean;
	_shellDesktopPositionTop?: boolean;
	_handleCSSFlags: () => void;
	_handleSubNavigation: () => void;
	_handleVariant: () => void;
	_handleKeyDown: (event: any) => void;
	_handleTreeKeys: (event: any) => void;
	_handlePopoverKeys: (event: any) => void;
	_focusParentGroupButton: (activeElement: HTMLElement) => boolean;
	_closeSubMenuAndReturnToParent: (parentGroupMenu: Element) => void;
	_resizeObserverCallbackId?: string;
	_singleBehaviorObserver?: MutationObserver;
	_attachSingleBehaviorObserver: () => void;
};

export type DBControlPanelNavigationState =
	DBControlPanelNavigationDefaultState &
		GlobalState &
		OverflowScrollButtonState &
		InitializedState;
