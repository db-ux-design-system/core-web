import type {
	ActiveColorState,
	ActiveMaterialProps,
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
	NextGenDefaultProps,
	SizeProps
} from '../../shared/model';

export type DBRadioDefaultProps = {};

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	NextGenDefaultProps &
	ActiveMaterialProps &
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
	ActiveColorState &
	InputEventState<HTMLInputElement> &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
