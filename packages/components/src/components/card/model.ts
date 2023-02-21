import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps
} from '../../shared/model';
import { ColorType } from '../../shared/constants';

export type DBCardDefaultProps = {
	colorVariant?: ColorType;
	direction?: 'column' | 'row';
	variant?: 'full-width' | 'interactive';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps &
	ImageProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
