import {
	ActiveColorState,
	ActiveMaterialProps,
	ChangeEventProps,
	ChangeEventState,
	ColorState,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormMessageProps,
	FormProps,
	FormState,
	FromValidState,
	GlobalProps,
	GlobalState,
	InitializedState,
	NextGenDefaultProps,
	SizeProps
} from '../../shared/model';

export type DBCheckboxDefaultProps = {
	/**
	 * Define an [indeterminate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#indeterminate) state of a checkbox
	 */
	indeterminate?: boolean | string;
};

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	NextGenDefaultProps &
	ActiveMaterialProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	FormMessageProps &
	SizeProps;

export type DBCheckboxDefaultState = {};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ColorState &
	ActiveColorState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState &
	FromValidState;
