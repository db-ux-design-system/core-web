import {
	ClickEventState,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState
} from '../../shared/model';

export const TooltipVariantList = ['with arrow', 'basic'] as const;
export type TooltipVariantType = (typeof TooltipVariantList)[number];

export interface DBTooltipDefaultProps {
	variant?: TooltipVariantType;
}

export type DBTooltipProps = DBTooltipDefaultProps &
	GlobalProps &
	EmphasisProps &
	PlacementProps &
	PopoverProps;

export interface DBTooltipDefaultState {}

export type DBTooltipState = DBTooltipDefaultState &
	GlobalState &
	ClickEventState<HTMLElement> &
	PopoverState &
	InitializedState;
