import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	FormCheckProps,
	InitializedState,
	EmphasisProps,
	SizeProps,
	IconProps,
	IconAfterProps
} from '../../shared/model';

export interface DBSwitchDefaultProps {
	visualAid?: boolean;
}

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

export interface DBSwitchDefaultState {
	_checked: boolean;
}

export type DBSwitchState = DBSwitchDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	InitializedState;
