import type {
	ActiveProps,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	InitializedState,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	WidthProps
} from '../../shared/model';

/**
 * DBTabItem is designed to be used exclusively inside a DBTabs container.
 * The parent DBTabs manages selection state (aria-selected, tabindex) via direct
 * DOM attribute manipulation. DBTabItem itself is purely presentational.
 */
export type DBTabItemDefaultProps = {
	/**
	 * The disabled attribute can be set to keep a user from clicking on the tab-item.
	 */
	disabled?: boolean | string;
	/**
	 * The label of the tab-item, if you don't want to use children.
	 */
	label?: string;
	/**
	 * Set the tabIndex manually (internal use for roving tabindex).
	 */
	tabIndex?: number | string;
	/**
	 * Semantic value of this tab item. When set, onIndexChange will emit this value
	 * (via the onValueChange event) instead of only the numeric index.
	 * Useful for form binding (e.g. Angular FormControl, React useState).
	 */
	value?: string;
};

export type DBTabItemProps = DBTabItemDefaultProps &
	GlobalProps &
	IconProps &
	ShowIconProps &
	IconTrailingProps &
	IconLeadingProps &
	ShowIconTrailingProps &
	ShowIconLeadingProps &
	ActiveProps &
	WidthProps;

export type DBTabItemDefaultState = {
	_resizeObserver: ResizeObserver | null | undefined;
	isTruncated: boolean;
	checkTruncation: () => void;
	tooltipText: string;
};

export type DBTabItemState = DBTabItemDefaultState &
	GlobalState &
	InitializedState;
