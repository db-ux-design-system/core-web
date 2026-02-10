import {
	AlignmentProps,
	GlobalProps,
	InitializedState,
	InputEvent,
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
	arrowScrollDistance?: number | string;
	/**
	 * Show a scrollbar or buttons with arrows to navigate for horizontal tabs with overflow visible
	 */
	behavior?: TabsBehaviorType;

	/**
	 * Default behavior is auto selecting the first tab, change selected tab by index
	 */
	initialSelectedIndex?: number | string;

	/**
	 * Default behavior is auto selecting the first tab, disable it with 'manually'
	 */
	initialSelectedMode?: TabsInitialSelectedModeType;

	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;

	/**
	 * Provide simple tabs with label + text as content
	 */
	tabs?: DBSimpleTabProps[] | string;
};

export type DBTabsEventProps = {
	/**
	 * Informs the user if the current tab index has changed.
	 */
	indexChange?: (index?: number) => void;

	/**
	 * Informs the user if the current tab index has changed.
	 */
	onIndexChange?: (index?: number) => void;
	/**
	 * Informs the user if another tab has been selected.
	 */
	onTabSelect?: (event?: InputEvent<HTMLElement>) => void;

	/**
	 * Informs the user if another tab has been selected.
	 */
	tabSelect?: (event?: InputEvent<HTMLElement>) => void;
};

export type DBTabsProps = DBTabsDefaultProps &
	GlobalProps &
	OrientationProps &
	WidthProps &
	AlignmentProps &
	DBTabsEventProps;

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
	handleChange: (event: InputEvent<HTMLElement>) => void;
	_resizeObserver?: ResizeObserver;
};

export type DBTabsState = DBTabsDefaultState & InitializedState;
