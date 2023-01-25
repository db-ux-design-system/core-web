import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState
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
	variant?: 'error' | 'success' | 'warning' | 'information';
	iconBefore?: string;
	iconAfter?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	description?: string;
	name?: string;
};

export const iconVariants: any = {
	error: 'error',
	// TODO: 'error-triangle' will change to 'warning' soon
	warning: 'error-triangle',
	success: 'check-circle',
	information: 'info'
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
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState;
