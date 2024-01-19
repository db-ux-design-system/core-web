import {
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	WidthProps
} from '../../shared/model';

export type DBTabDefaultProps = {
	/**
	 * If the tab is checked/active.
	 */
	active?: boolean;

	/**
	 * The label of the tab, shown in the tab-bar.
	 */
	label?: string;
	slotLabel?: any;

	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs.
	 */
	name?: string;

	/**
	 * The content if you don't want to use children.
	 */
	content?: string;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;

	/**
	 * Define the content alignment in full width
	 */
	alignment?: string;
};

export type DBTabProps = DBTabDefaultProps &
	GlobalProps &
	IconProps &
	IconAfterProps &
	WidthProps;

export type DBTabDefaultState = {};

export type DBTabState = DBTabDefaultState & GlobalState;
