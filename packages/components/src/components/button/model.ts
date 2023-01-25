import {
	type ClickEventProps,
	type ClickEventState,
	type GlobalProps,
	type GlobalState
} from '../../shared/model';

export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	onlyIcon?: boolean;
	state?: 'loading';
	size?: 'small';
	width?: 'full';
	variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState;
