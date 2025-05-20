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

export type DBTooltipDefaultProps = {
	showArrow?: boolean | string;
};

export type DBTooltipProps = DBTooltipDefaultProps &
	GlobalProps &
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
