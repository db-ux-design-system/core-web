import type {
	ClickEventState,
	DocumentScrollState,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState,
	ResetIdState,
	TextProps,
	WrapProps
} from '../../shared/model';

export const TooltipVariantList = ['description', 'label'] as const;
export type TooltipVariantType = (typeof TooltipVariantList)[number];

export type DBTooltipDefaultProps = {
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
	GlobalProps &
	EmphasisProps &
	PlacementProps &
	PopoverProps &
	WrapProps &
	TextProps;

export type DBTooltipDefaultState = {
	getParent: () => HTMLElement;
	_attachedParent?: HTMLElement;
	_attachedAttribute?: string;
	_previousAttributeValue?: string;
	_boundListeners?: {
		parent: HTMLElement;
		type: string;
		fn: (event: any) => void;
	}[];
	_detachListeners: () => void;
};

export type DBTooltipState = DBTooltipDefaultState &
	GlobalState &
	ClickEventState<HTMLElement> &
	PopoverState &
	InitializedState &
	DocumentScrollState &
	ResetIdState;
