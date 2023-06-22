import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabDefaultProps = {
	/**
	 * If the tab is checked/active.
	 */
	active?: boolean;

	/**
	 * The label of the tab, shown in the tab-bar.
	 */
	label?: string;

	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Otherwise content won't switch by clicking the tabs.
	 */
	name?: string;

	/**
	 * The content if you don't want to use children.
	 */
	content?: string;
};

export type DBTabProps = DBTabDefaultProps & GlobalProps;

export type DBTabDefaultState = {
	mId?: string;
};

export type DBTabState = DBTabDefaultState & GlobalState;
