import {
	ClickEvent,
	ClickEventProps,
	ClickEventState,
	DisabledProps,
	GlobalProps,
	GlobalState,
	IconProps,
	NavigationBackButtonProps,
	NavigationBehaviorState,
	ShowIconProps,
	WidthProps
} from '../../shared/model';
import { NavigationItemSafeTriangle } from '../../utils/navigation';
import { DBNavigationItemDefaultProps } from '../navigation-item/model';

export type DBNavigationItemGroupDefaultProps = {
	groupTitle?: string;

	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	subNavigationExpanded?: boolean | string;
};

export type DBNavigationItemGroupProps = DBNavigationItemGroupDefaultProps &
	NavigationBackButtonProps &
	ClickEventProps<HTMLButtonElement> &
	GlobalProps &
	IconProps &
	WidthProps &
	ShowIconProps &
	DBNavigationItemDefaultProps &
	DisabledProps;

export type DBNavigationItemGroupDefaultState = {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	isSubNavigationExpanded: boolean;
	subNavigationId: string;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	hasSubNavigation?: boolean;
	navigationItemSafeTriangle?: NavigationItemSafeTriangle;
	autoClose?: boolean;
};

export type DBNavigationItemGroupState = DBNavigationItemGroupDefaultState &
	ClickEventState<HTMLButtonElement> &
	GlobalState &
	NavigationBehaviorState;
