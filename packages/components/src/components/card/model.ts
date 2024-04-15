import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export type DBCardDefaultProps = {
	/**
	 * Makes the card interactive
	 */
	behaviour?: 'default' | 'interactive';

	elevationLevel?: '1' | '2' | '3';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	SpacingProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
