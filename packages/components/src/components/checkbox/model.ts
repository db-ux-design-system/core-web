import {
	FocusEventProps,
	FocusEventState,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState,
	FormCheckProps,
	InitializedState,
	FormMessageProps,
	FormMessageState,
	SizeProps
} from '../../shared/model';

export interface DBCheckboxDefaultProps {
	/**
	 * Define an [indeterminate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#indeterminate) state of a checkbox
	 */
	indeterminate?: boolean;
}

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	FormMessageProps &
	SizeProps;

export type DBCheckboxDefaultState = {};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState &
	FormMessageState;
