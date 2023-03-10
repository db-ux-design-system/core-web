import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps
} from '../../shared/model';

enum cardVariants {
	'full-width' = 'full-width',
	'interactive' = 'interactive'
}

enum cardDirections {
	'column' = 'column',
	'row' = 'row'
}

export const cardVariantsList = Object.values(cardVariants);

export const cardDirectionsList = Object.values(cardDirections);

export type DBCardDefaultProps = {
	// TODO: Add colorVariant to test
	colorVariant?: string;
	direction?: cardDirections;
	variant?: cardVariants;
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
