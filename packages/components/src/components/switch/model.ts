import type {
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
	 * Add additional icons to indicate active/inactive state.
	 */
	visualAid?: boolean | string;

	/**
	 * Change the variant of the label to `trailing` or `leading`. Defaults to `trailing`
	 */
	variant?: LabelVariantHorizontalType;
};

export type DBSwitchProps = GlobalProps &
	AdaptiveDefaultProps &
	AltStateMaterialProps &
	ChangeEventProps<HTMLInputElement> &
	FocusEventProps<HTMLInputElement> &
	FormProps &
	FormCheckProps &
	Omit<FormMessageProps, 'variant'> &
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
	ColorState &
	AltStateColorState &
	ChangeEventState<HTMLInputElement> &
	FocusEventState<HTMLInputElement> &
	FormState &
	FromValidState;
