import {
	ClickEvent,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	NavigationBackButtonProps,
	WidthProps
} from '../../shared/model';
import { NavigationItemSafeTriangle } from '../../utils/navigation';

export interface DBNavigationItemDefaultProps {
	/**
	 * Indicator for active navigation item (bold font).
	 */
	active?: boolean;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean;

	/**
	 * React-specific property to pass in a slot for sub-navigation
	 */

	subNavigation?: unknown;

	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	subNavigationExpanded?: boolean;
}

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	NavigationBackButtonProps;

export interface DBNavigationItemTriangleData {
	itemRect: DOMRect;
	parentElementWidth: number;
	subNavigationHeight: number;
	padding: number;
	outsideVX: 'left' | 'right' | undefined;
	outsideVY: 'top' | 'bottom' | undefined;
}

export interface DBNavigationItemDefaultState {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	hasAreaPopup: boolean;
	isSubNavigationExpanded: boolean;
	subNavigationId: string;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	hasSubNavigation?: boolean;
	updateSubNavigationState: () => void;
	navigationItemSafeTriangle?: NavigationItemSafeTriangle;
}

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState<HTMLButtonElement> &
	GlobalState &
	InitializedState;
