import {
	GlobalProps,
	InitializedState,
	OrientationProps,
	TabItemAlignmentProps,
	WidthType
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

	/**
	 * Width of the tab-items. Auto width based on tab-item size, full width based on parent elements width.
	 */
	tabItemWidth?: WidthType | string;

	/**
	 * Accessible label for the "scroll towards start" button (i18n). Only used with behavior="arrows".
	 */
	scrollStartLabel?: string;

	/**
	 * Accessible label for the "scroll towards end" button (i18n). Only used with behavior="arrows".
	 */
	scrollEndLabel?: string;
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
};

export type DBTabsProps = DBTabsDefaultProps &
	GlobalProps &
	OrientationProps &
	TabItemAlignmentProps &
	DBTabsEventProps;

export type DBTabsDefaultState = {
	_generatedId: string;
	_generatedName: string;
	_id: () => string;
	_name: () => string;
	_getScrollContainer: () => Element | null;
	scroll: (toStart?: boolean) => void;
	showScrollStart?: boolean;
	showScrollEnd?: boolean;
	_isRtl: () => boolean;
	evaluateScrollButtons: (tabList: Element) => void;
	_cachedTabs: DBSimpleTabProps[];
	_updateCachedTabs: () => void;
	initTabList: () => void;
	initTabs: (activeIndex?: number) => void;
	_resizeObserver?: ResizeObserver | null;
	_observer?: MutationObserver | null;
	_pendingRafId: number | null;
	_scrollListener: { fn: () => void } | null;
	activeTabIndex: number;
	activateTab: (index: number) => void;
	getTabId: (index: number | string) => string;
	getPanelId: (index: number | string) => string;
	handleClick: (event: any) => void;
	handleKeyDown: (event: any) => void;
	isIndexActive: (index: number | string) => boolean;
	getTabItemTabIndex: (index: number | string) => 0 | -1;
};

export type DBTabsState = DBTabsDefaultState & InitializedState;
