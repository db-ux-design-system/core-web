import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBButtonDefaultProps = {
	disabled?: boolean;
	icon?: string;
	icntxt?: boolean; // We had to rename this to onlyIc because wc uses a regex and always finds "icon" instead of "onlyIcon"
	state?: 'loading';
	size?: 'small';
	text?: string;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full';
	variant?: 'outline' | 'primary' | 'transparent' | 'semi-transparent';
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState;
