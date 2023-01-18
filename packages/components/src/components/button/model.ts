import { GlobalProps, GlobalState } from '../../shared/model';

export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	onlyIcon?: boolean;
	state?: 'loading';
	size?: 'small';
	width?: 'full';
	variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
};

export type DBButtonProps = DBButtonDefaultProps & GlobalProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState & GlobalState;
