import { GlobalProps, GlobalState } from '../../shared/model';

export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	variant?: string;
};

export type DBButtonProps = DBButtonDefaultProps & GlobalProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState & GlobalState;
