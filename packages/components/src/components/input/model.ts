import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantProps
} from '../../shared/model';

export type DBInputDefaultProps = {
	id?: string;
	label?: string;
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
	iconBefore?: string;
	iconAfter?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	description?: string;
	name?: string;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps;

export type DBInputDefaultState = {
	mId?: string;
	_isValid: boolean | undefined;
	_value: any;
	_placeholder: string;
	_label: string;
	getIcon: (variant: DefaultVariantProps) => string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState;
