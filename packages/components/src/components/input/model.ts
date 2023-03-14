import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantProps,
	FormProps,
	FormState,
	IconProps,
	IconState
} from '../../shared/model';

export type DBInputDefaultProps = {
	type?:
		| 'text'
		| 'search'
		| 'number'
		| 'tel'
		| 'url'
		| 'email'
		| 'password'
		| 'hidden'
		| 'date'
		| 'datetime-local'
		| 'week';
	variant?: DefaultVariantProps;
	iconAfter?: string;
	description?: string;
	value?: any;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	IconProps;

export type DBInputDefaultState = {
	_value?: any;
	getIcon: (variant: DefaultVariantProps) => string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	IconState;
