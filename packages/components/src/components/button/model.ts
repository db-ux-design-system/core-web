import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	IconState
} from '../../shared/model';

export type DBButtonDefaultProps = {
	disabled?: boolean;
	icntxt?: boolean; // We had to rename this to onlyIc because wc uses a regex and always finds "icon" instead of "onlyIcon"
	state?: 'loading';
	size?: 'small';
	text?: string;
	label?: string;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full' | 'auto';
	variant?: 'outline' | 'primary' | 'transparent' | 'semi-transparent';
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState &
	IconState;
