import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps
} from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	direction?: 'column' | 'row';
	variant?: 'full-width' | 'interactive';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps &
	CardProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
