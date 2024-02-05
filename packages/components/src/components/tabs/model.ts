import {
	AlignmentProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	OrientationProps,
	WidthProps
} from '../../shared/model';
import { DBTabProps } from '../tab/model';
import { DBTabPanelProps } from '../tab-panel/model';

export type DBSimpleTabProps = DBTabProps & DBTabPanelProps;
export interface DBTabsDefaultProps {
	/**
	 * Change amount of distance if you click on an arrow, only available with behaviour="arrows"
	 */
	arrowScrollDistance?: number;

	/**
	 * Show a scrollbar or buttons with arrows to navigate for horizontal tabs with overflow visible
	 */
	behaviour?: 'scrollbar' | 'arrows';

	/**
	 * Default behaviour is auto selecting the first tab, change selected tab by index
	 */
	initialSelectedIndex?: number;

	/**
	 * Default behaviour is auto selecting the first tab, disable it with 'manually'
	 */
	initialSelectedMode?: 'auto' | 'manually';

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
	tabList?: Element;
	scroll: (left?: boolean) => void;
	showScrollLeft?: boolean;
	showScrollRight?: boolean;
	evaluateScrollButtons: (tabList: Element) => void;
	convertTabs: (tabs?: any[] | string | undefined) => DBSimpleTabProps[];
}

export type DBTabsState = DBTabsDefaultState & GlobalState & InitializedState;
