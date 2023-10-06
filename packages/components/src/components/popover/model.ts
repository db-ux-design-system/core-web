import {
	ClickEventState,
	GapProps,
	GlobalProps,
	GlobalState,
	PlacementProps,
	SpacingProps
} from '../../shared/model';

export interface DBPopoverDefaultProps {
	/**
	 * Add a delay before showing the tooltip
	 */
	delay?: 'none' | 'slow' | 'fast';
	/**
	 * Disable animation with 'plain' behaviour
	 */
	behaviour?: 'animated' | 'plain';
	/**
	 * Use open to disable the default hover to use it on click or other trigger.
	 */
	open?: boolean;
	/**
	 * Use fixed with for default max-width
	 */
	width?: 'auto' | 'fixed';
}

export type DBPopoverProps = DBPopoverDefaultProps &
	GlobalProps &
	SpacingProps &
	PlacementProps &
	GapProps;

export interface DBPopoverDefaultState {}

export type DBPopoverState = DBPopoverDefaultState & GlobalState&
	ClickEventState;
