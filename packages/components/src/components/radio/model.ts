import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	InitializedState,
	InputEventProps,
	InputEventState,
	SizeProps
} from '../../shared/model';

export type DBRadioDefaultProps = {};

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	InputEventProps<HTMLInputElement> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	SizeProps;

export type DBRadioDefaultState = {};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
