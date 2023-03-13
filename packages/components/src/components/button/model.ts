import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

// TODO: 👇 Find a way to make react-docgen work withouth duplicating the types below
enum buttonVariants {
	'outline' = 'outline',
	'primary' = 'primary',
	'transparent' = 'transparent',
	'semi-transparent' = 'semi-transparent'
}
export const buttonVariantsList = Object.values(buttonVariants);
type buttonVariantsType =
	| 'outline'
	| 'primary'
	| 'transparent'
	| 'semi-transparent';

export type DBButtonDefaultProps = {
	disabled?: boolean;
	icon?: string;
	icntxt?: boolean; // We had to rename this to onlyIc because wc uses a regex and always finds "icon" instead of "onlyIcon"
	state?: 'loading';
	size?: 'small';
	text?: string;
	type?: 'button' | 'reset' | 'submit';
	width?: 'full';
	variant?: buttonVariantsType;
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState;
