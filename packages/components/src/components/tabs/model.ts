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

export const TabsBehaviourList = ['scrollbar', 'arrows'] as const;
export type TabsBehaviourType = (typeof TabsBehaviourList)[number];

export const TabsInitialSelectedModeList = ['auto', 'manually'] as const;
export type TabsInitialSelectedModeType =
	(typeof TabsInitialSelectedModeList)[number];

export type DBSimpleTabProps = DBTabItemProps & DBTabPanelProps;
export interface DBTabsDefaultProps {
	/**
	 * Change amount of distance if you click on an arrow, only available with behaviour="arrows"
	 */
	arrowScrollDistance?: number;

	/**
	 * Show a scrollbar or buttons with arrows to navigate for horizontal tabs with overflow visible
	 */
	behaviour?: TabsBehaviourType;

	/**
	 * Default behaviour is auto selecting the first tab, change selected tab by index
	 */
	initialSelectedIndex?: number;

	/**
	 * Default behaviour is auto selecting the first tab, disable it with 'manually'
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
}

export type DBTabsProps = DBTabsDefaultProps &
	GlobalProps &
	OrientationProps &
	WidthProps &
	AlignmentProps;

export interface DBTabsDefaultState {
	_name: string;
	scrollContainer?: Element | null;
	scroll: (left?: boolean) => void;
	showScrollLeft?: boolean;
	showScrollRight?: boolean;
	evaluateScrollButtons: (tabList: Element) => void;
	convertTabs: (tabs?: unknown[] | string | undefined) => DBSimpleTabProps[];
	initTabList: () => void;
	initTabs: (init?: boolean) => void;
}

export type DBTabsState = DBTabsDefaultState & GlobalState & InitializedState;
