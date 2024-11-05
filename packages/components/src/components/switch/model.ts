import {
	ChangeEventProps,
	ChangeEventState,
	EmphasisProps,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconAfterProps,
	IconProps,
	InitializedState,
	SizeProps
} from '../../shared/model';

export type DBSwitchDefaultProps = {
	visualAid?: boolean;
};

export type DBSwitchProps = DBSwitchDefaultProps &
	GlobalProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	EmphasisProps &
	SizeProps &
	IconProps &
	IconAfterProps;

export type DBSwitchDefaultState = {
	_checked: boolean;
};

export type DBSwitchState = DBSwitchDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
