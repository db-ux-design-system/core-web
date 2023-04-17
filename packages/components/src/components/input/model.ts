import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantType,
	FormProps,
	FormState,
	IconProps,
	IconState,
	DefaultVariantProps
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
	IconProps &
	DefaultVariantProps;

export type DBInputDefaultState = {
	_value?: any;
	getIcon: (variant?: DefaultVariantType) => string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	IconState;
