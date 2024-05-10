import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormState,
	FormTextProps,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InputEventProps,
	InputEventState,
	KeyValueType
} from '../../shared/model';

export type DBInputDefaultProps = {
	dataList?: KeyValueType[];
	dataListId?: string;
	/**
	 * Maximum value
	 */
	max?: number | string;
	/**
	 * Minimum value
	 */
	min?: number | string;

	/**
	 * Pattern the value must match to be valid
	 */
	pattern?: string;
	/**
	 * 	Type of form control
	 */
	type?:
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file' // TODO: move this to own component
		| 'hidden'
		| 'month'
		| 'number'
		| 'password'
		| 'range' // TODO: move this to own component
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| string;
	step?: number | string;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	FormTextProps &
	InputEventProps<HTMLInputElement> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	IconProps &
	IconAfterProps &
	FormMessageProps;

export type DBInputDefaultState = {
	_dataListId?: string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState;
