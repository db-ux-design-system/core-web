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
	variant?: 'interactive';
	spacing?: 'medium' | 'small';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps &
	CardProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
