import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps
} from '../../shared/model';

// TODO: 👇 Find a way to make react-docgen work withouth duplicating the types below
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
type cardVariantsType = 'full-width' | 'interactive';
type cardDirectionsType = 'column' | 'row';

export type DBCardDefaultProps = {
	// TODO: Add colorVariant to test
	colorVariant?: string;
	direction?: cardDirectionsType;
	variant?: cardVariantsType;
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
