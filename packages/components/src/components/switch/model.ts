import {
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	FocusEventState,
	FormCheckProps,
	FormMessageProps,
	FormProps,
	FormState,
	FromValidState,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	LabelVariantHorizontalType,
	SizeProps
} from '../../shared/model';

export type DBSwitchDefaultProps = {
	/**
	 * Add additional icons to indicate active/inactive state.
	 */
	visualAid?: boolean | string;
	/**
	 * Use accent styling (same visual appearance as valid state).
	 */
	accent?: boolean | string;
};

export type DBSwitchProps = DBSwitchDefaultProps &
	GlobalProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	FormMessageProps &
	SizeProps &
	IconProps &
	IconTrailingProps &
	IconLeadingProps &
	LabelVariantHorizontalType;

export type DBSwitchDefaultState = {};

export type DBSwitchState = DBSwitchDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	FromValidState;
