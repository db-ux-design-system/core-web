import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export const CardBehaviourList = ['default', 'interactive'] as const;
export type CardBehaviourType = (typeof CardBehaviourList)[number];

export const CardElevationLevelList = ['1', '2', '3'] as const;
export type CardElevationLevelType = (typeof CardElevationLevelList)[number];

export type DBCardDefaultProps = {
	/**
	 * Makes the card interactive
	 */
	behaviour?: CardBehaviourType;

	elevationLevel?: CardElevationLevelType;
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	SpacingProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
