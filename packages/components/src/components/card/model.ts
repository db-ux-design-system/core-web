import {
	type ClickEventProps,
	type ClickEventState,
	type GlobalProps,
	type GlobalState,
	type ImageProps
} from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	direction?: 'row' | 'column';

	variant?: 'full-width' | 'ia';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
