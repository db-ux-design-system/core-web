import {
	ActiveProps,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InitializedState
} from '../../shared/model';

export type DBTabDefaultProps = {
	/**
	 * The label of the tab, if you don't want to use children.
	 */
	label?: string;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the tab.
	 */
	disabled?: boolean;
};

export type DBTabProps = GlobalProps &
	DBTabDefaultProps &
	IconProps &
	IconAfterProps &
	ActiveProps;

export type DBTabDefaultState = {};

export type DBTabState = DBTabDefaultState & GlobalState & InitializedState;
