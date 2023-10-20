import {
	ClickEventState,
	GapProps,
	GlobalProps,
	GlobalState,
	PlacementProps,
	PopoverProps,
	SpacingProps
} from '../../shared/model';

export interface DBPopoverDefaultProps {
	/**
	 * Use open to disable the default hover to use it on click or other trigger.
	 */
	open?: boolean;
}

export type DBPopoverProps = DBPopoverDefaultProps &
	GlobalProps &
	SpacingProps &
	PlacementProps &
	GapProps &
	PopoverProps;

export interface DBPopoverDefaultState {}

export type DBPopoverState = DBPopoverDefaultState &
	GlobalState &
	ClickEventState;
