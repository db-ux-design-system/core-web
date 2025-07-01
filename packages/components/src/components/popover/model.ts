import {
	GapProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	PlacementProps,
	PopoverProps,
	PopoverState,
	SpacingProps
} from '../../shared/model';

export type DBPopoverDefaultProps = {
	/**
	 * Use open to disable the default hover/focus behavior to use it on click or other trigger.
	 */
	open?: boolean | string;

	/**
	 * The trigger to open the popover e.g. a button
	 */
	trigger?: any;
};

export type DBPopoverProps = DBPopoverDefaultProps &
	GlobalProps &
	SpacingProps &
	PlacementProps &
	GapProps &
	PopoverProps;

export type DBPopoverDefaultState = {
	isExpanded?: boolean;
	getTrigger: () => Element | null;
};

export type DBPopoverState = DBPopoverDefaultState &
	GlobalState &
	PopoverState &
	InitializedState;
