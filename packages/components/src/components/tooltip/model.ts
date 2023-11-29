import {
	ClickEventState,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	PlacementProps,
	PopoverProps
} from '../../shared/model';

export interface DBTooltipDefaultProps {
	variant?: 'with arrow' | 'basic';
}

export type DBTooltipProps = DBTooltipDefaultProps &
	GlobalProps &
	EmphasisProps &
	PlacementProps &
	PopoverProps;

export interface DBTooltipDefaultState {}

export type DBTooltipState = DBTooltipDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
