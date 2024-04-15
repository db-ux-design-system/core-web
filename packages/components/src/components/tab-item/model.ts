import {
	ActiveProps,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InitializedState
} from '../../shared/model';

export type DBTabItemDefaultProps = {
	/**
	 * The label of the tab-item, if you don't want to use children.
	 */
	label?: string;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the tab-item.
	 */
	disabled?: boolean;
};

export type DBTabItemProps = GlobalProps &
	DBTabItemDefaultProps &
	IconProps &
	IconAfterProps &
	ActiveProps;

export type DBTabItemDefaultState = {};

export type DBTabItemState = DBTabItemDefaultState &
	GlobalState &
	InitializedState;
