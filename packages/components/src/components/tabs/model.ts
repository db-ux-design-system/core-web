import {
	AlignmentProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	ItemClickState,
	OrientationProps,
	WidthProps
} from '../../shared/model';
import { DBTabProps } from '../tab/model';

export interface DBTabsDefaultProps {
	/**
	 * The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children.
	 */
	name?: string;
	tabs?: DBTabProps[] | string;

	slotTabList?: any;

	initialSelectedId?: string;
	behaviour?: 'scrollbar' | 'arrows';
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
	convertTabs: (tabs?: any[] | string | undefined) => DBTabProps[];
}

export type DBTabsState = DBTabsDefaultState & GlobalState & InitializedState;
