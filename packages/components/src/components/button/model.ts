import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBButtonDefaultProps = {
	disabled?: boolean;
	icon?: string;
	onlyIcon?: boolean;
	state?: 'loading';
	size?: 'small';
	text?: string;

	type?: 'button' | 'reset' | 'submit';
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
