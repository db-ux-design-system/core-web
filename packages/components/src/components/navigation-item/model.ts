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

export interface DBNavigationItemActionProps {
	text?: string;
}

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
	 * Use an icon button here for additional actions.
	 */
	action?: DBNavigationItemActionProps & IconProps & ClickEventProps;

	slotSubNavigation?: any;

	isMainMenuItem?: boolean;
}

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	IconAfterProps &
	WidthProps;

export interface DBNavigationItemDefaultState {
	handleActionClick: (event: any) => void;
	hasAreaPopup: boolean;
	subNavigationId: string;
}

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState &
	GlobalState &
	IconState &
	InitializedState;
