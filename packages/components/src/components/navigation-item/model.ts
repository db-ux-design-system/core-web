import {
	ClickEvent,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	NavigationBackButtonProps,
	NavigationBehaviorState,
	ShowIconProps,
	TextProps,
	WidthProps,
	WrapProps
} from '../../shared/model';
import { NavigationItemSafeTriangle } from '../../utils/navigation';

export type DBNavigationItemDefaultProps = {
	/**
	 * Alternative indicator for active navigation item (bold font). In contrast to the use of aria-current="page" on the contained anchor, this does not guarantee correct a11y.
	 */
	active?: boolean;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean | string;

	/**
	 * React-specific property to pass in a slot for sub-navigation
	 */

	subNavigation?: any;

	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	subNavigationExpanded?: boolean | string;
};

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	WrapProps &
	NavigationBackButtonProps &
	ShowIconProps &
	TextProps;

export type DBNavigationItemDefaultState = {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	hasAreaPopup: boolean;
	isSubNavigationExpanded: boolean;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	hasSubNavigation?: boolean;
	navigationItemSafeTriangle?: NavigationItemSafeTriangle;
	autoClose?: boolean;
};

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState<HTMLButtonElement> &
	GlobalState &
	InitializedState &
	NavigationBehaviorState;
