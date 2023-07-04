import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	IconState,
	InitializedState,
	NavigationBackButtonProps,
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

	isMainMenuItem?: boolean;

	slotSubNavigation?: any;

	subNavigationExpanded?: boolean;
}

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	IconAfterProps &
	WidthProps &
	NavigationBackButtonProps;

export interface DBNavigationItemDefaultState {
	handleBackClick: (event: any) => void;
	hasAreaPopup: boolean;
	isSubNavigationExpanded: boolean;
	subNavigationId: string;
}

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState &
	GlobalState &
	IconState &
	InitializedState;
