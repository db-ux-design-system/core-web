import {
	ClickEventState,
	GapProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState,
	SpacingProps
} from '../../shared/model';

export interface DBPopoverDefaultProps {
	/**
	 * Use open to disable the default hover/focus behaviour to use it on click or other trigger.
	 */
	open?: boolean;

	/**
	 * The trigger to open the popover e.g. a button
	 */
	slotTrigger?: any;
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
	PopoverState &
	InitializedState;
