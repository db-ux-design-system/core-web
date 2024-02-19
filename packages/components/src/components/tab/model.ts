import {
	ActiveProps,
	AlignmentProps,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InitializedState,
	WidthProps
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
};

export type DBTabProps = GlobalProps &
	DBTabDefaultProps &
	IconProps &
	IconAfterProps &
	WidthProps &
	ActiveProps &
	AlignmentProps;

export type DBTabDefaultState = {};

export type DBTabState = DBTabDefaultState & GlobalState & InitializedState;
