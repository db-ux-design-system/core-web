import {
	AlignmentProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	OrientationProps,
	WidthProps
} from '../../shared/model';
import { DBTabItemProps } from '../tab-item/model';
import { DBTabPanelProps } from '../tab-panel/model';

export const TabsBehaviorList = ['scrollbar', 'arrows'] as const;
export type TabsBehaviorType = (typeof TabsBehaviorList)[number];

export const TabsInitialSelectedModeList = ['auto', 'manually'] as const;
export type TabsInitialSelectedModeType =
	(typeof TabsInitialSelectedModeList)[number];

export type DBSimpleTabProps = DBTabItemProps & DBTabPanelProps;
export type DBTabsDefaultProps = {
	/**
	 * Change amount of distance if you click on an arrow, only available with behavior="arrows"
	 */
	arrowScrollDistance?: number;
	/**
	 * Show a scrollbar or buttons with arrows to navigate for horizontal tabs with overflow visible
	 */
	behavior?: TabsBehaviorType;

	/**
	 * Default behavior is auto selecting the first tab, change selected tab by index
	 */
	initialSelectedIndex?: number;

	/**
	 * Default behavior is auto selecting the first tab, disable it with 'manually'
	 */
	initialSelectedMode?: TabsInitialSelectedModeType;

	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;

	/**
	 * Informs the user if the current tab index has changed.
	 */
	onIndexChange?: (index?: number) => void;

	/**
	 * Informs the user if another tab has been selected.
	 */
	onTabSelect?: (event?: Event) => void;

	/**
	 * Provide simple tabs with label + text as content
	 */
	tabs?: DBSimpleTabProps[] | string;
};

export type DBTabsProps = DBTabsDefaultProps &
	GlobalProps &
	OrientationProps &
	WidthProps &
	AlignmentProps;

export type DBTabsDefaultState = {
	_name: string;
	scrollContainer?: Element | null;
	scroll: (left?: boolean) => void;
	showScrollLeft?: boolean;
	showScrollRight?: boolean;
	evaluateScrollButtons: (tabList: Element) => void;
	convertTabs: () => DBSimpleTabProps[];
	initTabList: () => void;
	initTabs: (init?: boolean) => void;
	handleChange: (event: any) => void;
};

export type DBTabsState = DBTabsDefaultState & GlobalState & InitializedState;
