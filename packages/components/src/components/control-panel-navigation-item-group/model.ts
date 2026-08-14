import {
	ClickEvent,
	ClickEventProps,
	ClickEventState,
	DisabledProps,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	NavigationBackButtonProps,
	NavigationBehaviorState,
	ShowIconProps
} from '../../shared/model';
import { NavigationItemSafeTriangle } from '../../utils/navigation';
import { DBControlPanelNavigationItemDefaultProps } from '../control-panel-navigation-item/model';

export type DBControlPanelNavigationItemGroupDefaultProps = {
	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	expanded?: boolean | string;

	/**
	 * Change id for db-control-panel-navigation-item-group-menu
	 */
	menuId?: string;
};

export type DBControlPanelNavigationItemGroupProps =
	DBControlPanelNavigationItemGroupDefaultProps &
		NavigationBackButtonProps &
		ClickEventProps<HTMLButtonElement> &
		GlobalProps &
		IconProps &
		ShowIconProps &
		DBControlPanelNavigationItemDefaultProps &
		DisabledProps;

export type DBControlPanelNavigationItemGroupDefaultState = {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	isSubNavigationExpanded: boolean;
	_itemGroupMenuId: string;
	_intersectionObserverCallbackId?: string;
	_resizeObserverCallbackId?: string;
	_attributeObserver?: MutationObserver;
	_role?: string;
	_popoverListenersAttached: boolean;
	_boundMouseEnter?: () => void;
	_boundMouseLeave?: () => void;
	_boundFocusIn?: () => void;
	_boundFocusOut?: (event: any) => void;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	_isDrilldown: boolean;
	_isPopover: boolean;
	_getPopoverFlag: () => boolean;
	_getDrilldownFlag: () => boolean;
	navigationItemSafeTriangle?: NavigationItemSafeTriangle;
	autoClose?: boolean;
	onScroll: () => void;
	handleEscape: (event: any) => void;
	forceClose: () => void;
	_attachPopoverListeners: () => void;
	_detachPopoverListeners: () => void;
	_teardownPopover: () => void;
	_handleCSSFlags: () => void;
	_handleFocusIn: () => void;
	_handleFocusOut: (event: any) => void;
	_handleMouseEnter: () => void;
	_handleMouseLeave: () => void;
	_setSiblingsInert: (inert: boolean) => void;
	_handleSubNavigation: () => void;
};

export type DBControlPanelNavigationItemGroupState =
	DBControlPanelNavigationItemGroupDefaultState &
		ClickEventState<HTMLButtonElement> &
		GlobalState &
		NavigationBehaviorState &
		InitializedState;
