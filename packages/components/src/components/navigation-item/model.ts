import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	IconState,
	InitializedState,
	WidthProps
} from '../../shared/model';

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
	 * To show puls indicator for active navigation items.
	 */
	isMainMenuItem?: boolean;

	/**
	 * React-specific property to pass in a slot for sub-navigation
	 */

	slotSubNavigation?: any;
}

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	IconAfterProps &
	WidthProps;

export interface DBNavigationItemDefaultState {
	hasAreaPopup: boolean;
	subNavigationId: string;
}

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState &
	GlobalState &
	IconState &
	InitializedState;
