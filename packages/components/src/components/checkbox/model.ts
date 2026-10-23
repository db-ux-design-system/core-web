import {
	AdaptiveDefaultProps,
	AltStateColorState,
	AltStateMaterialProps,
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
	AdaptiveDefaultProps &
	AltStateMaterialProps &
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
	AltStateColorState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState &
	FromValidState;
