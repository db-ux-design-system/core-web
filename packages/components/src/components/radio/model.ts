import {
	AltStateColorState,
	AltStateMaterialProps,
	ChangeEventProps,
	ChangeEventState,
	ColorState,
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
	MaterialProps,
	SizeProps
} from '../../shared/model';

export type DBRadioDefaultProps = {};

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	MaterialProps &
	AltStateMaterialProps &
	InputEventProps<HTMLInputElement> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	SizeProps;

export type DBRadioDefaultState = {};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	ColorState &
	AltStateColorState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
