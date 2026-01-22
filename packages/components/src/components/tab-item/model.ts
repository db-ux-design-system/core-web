import {
	ActiveProps,
	ClickEventProps,
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

export type DBTabItemDefaultProps = {
	/**
	 * The isDisabled attribute can be set to keep a user from clicking on the tab-item.
	 */
	isDisabled?: boolean;
	/**
	 * The label of the tab-item, if you don't want to use children.
	 */
	label?: string;
	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean | string;
	/**
	 * Set the tabIndex manually (internal use for roving tabindex).
	 */
	tabIndex?: number | string;
	/**
	 * The id of the panel this tab controls (WAI-ARIA).
	 */
	ariaControls?: string;
};

export type DBTabItemProps = DBTabItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	ShowIconProps &
	IconTrailingProps &
	IconLeadingProps &
	ShowIconTrailingProps &
	ShowIconLeadingProps &
	ActiveProps &
	WidthProps;

export interface DBTabItemState extends GlobalState, InitializedState {
	internalActive: boolean | undefined;
	disabled: boolean | undefined;
	_observer: MutationObserver | null | undefined;
	_resizeObserver: ResizeObserver | null | undefined;
	handleClick: (event: any) => void;
	isTruncated: boolean;
	checkTruncation: () => void;
	tooltipText: string;
}
