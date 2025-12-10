import {
	AdditionalInformationSlotProps,
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
	NavigationItemGroupVariant,
	ShowIconProps
} from '../../shared/model';
import { NavigationItemSafeTriangle } from '../../utils/navigation';
import { DBNavigationItemDefaultProps } from '../navigation-item/model';

export type DBNavigationItemGroupDefaultProps = {
	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	expanded?: boolean | string;

	/**
	 * Change id for db-navigation-item-group-menu
	 */
	menuId?: string;
};

export type DBNavigationItemGroupProps = DBNavigationItemGroupDefaultProps &
	NavigationBackButtonProps &
	ClickEventProps<HTMLButtonElement> &
	GlobalProps &
	IconProps &
	ShowIconProps &
	DBNavigationItemDefaultProps &
	DisabledProps &
	NavigationItemGroupVariant &
	AdditionalInformationSlotProps;

export type DBNavigationItemGroupDefaultState = {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	isSubNavigationExpanded: boolean;
	_itemGroupMenuId: string;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	hasSubNavigation?: boolean;
	hasPopup?: boolean;
	navigationItemSafeTriangle?: NavigationItemSafeTriangle;
	autoClose?: boolean;
	onScroll: () => void;
	handleEscape: (event: any) => void;
	forceClose: () => void;
};

export type DBNavigationItemGroupState = DBNavigationItemGroupDefaultState &
	ClickEventState<HTMLButtonElement> &
	GlobalState &
	NavigationBehaviorState &
	InitializedState;
