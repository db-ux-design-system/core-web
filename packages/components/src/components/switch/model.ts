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
	GeneralKeyboardEvent,
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
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the input element, generated automatically as a fallback if unset.
	 */
	idInput?: string;
	/**
	 * Add additional icons to indicate active/inactive state.
	 */
	visualAid?: boolean | string;

	/**
	 * Change the variant of the label to `trailing` or `leading`. Defaults to `trailing`
	 */
	variant?: LabelVariantHorizontalType;
};

export type DBSwitchProps = Omit<GlobalProps, 'id'> &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	FormMessageProps &
	SizeProps &
	IconProps &
	IconTrailingProps &
	IconLeadingProps &
	DBSwitchDefaultProps;

export type DBSwitchDefaultState = {
	handleKeyDown: (event: GeneralKeyboardEvent<HTMLInputElement>) => void;
};

export type DBSwitchState = DBSwitchDefaultState &
	GlobalState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	FromValidState;
