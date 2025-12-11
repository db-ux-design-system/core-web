import {
	ClickEventState,
	DocumentScrollState,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState
} from '../../shared/model';

export const TooltipVariantList = ['description', 'label'] as const;
export type TooltipVariantType = (typeof TooltipVariantList)[number];

export type DBTooltipDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the i element, generated automatically as a fallback if unset.
	 */
	iid?: string;
	/**
	 * Show/Hides arrow
	 */
	showArrow?: boolean | string;
	/**
	 * Change the behavior of the tooltip:
	 * - description: Adds `aria-describedby` to parent
	 * - label: Adds `aria-labelledby` to parent
	 */
	variant?: TooltipVariantType;
};

export type DBTooltipProps = DBTooltipDefaultProps &
	Omit<GlobalProps, 'id'> &
	EmphasisProps &
	PlacementProps &
	PopoverProps;

export type DBTooltipDefaultState = {
	getParent: () => HTMLElement;
};

export type DBTooltipState = DBTooltipDefaultState &
	GlobalState &
	ClickEventState<HTMLElement> &
	PopoverState &
	InitializedState &
	DocumentScrollState;
