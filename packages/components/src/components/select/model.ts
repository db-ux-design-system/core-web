import {
	ChangeEventProps,
	ChangeEventState,
	ClickEventProps,
	ClickEventState,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormSizeProps,
	FormState,
	FromValidState,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	InputEventProps,
	InputEventState,
	ShowIconProps
} from '../../shared/model';

export type DBSelectDefaultProps = {
	/**
	 * @deprecated
	 * Enables multiple select, but it isn't styled, please use DBCustomSelect/db-custom-select instead
	 */
	multiple?: boolean;

	/**
	 * If you don't/can't use children/slots you can pass in the options as an array.
	 */
	options?: DBSelectOptionType[];

	/**
	 * Controls whether the empty placeholder option is shown in the dropdown after users selection of another option.
	 * By default, it is shown for non-required selects and hidden for required selects.
	 * Set to `true` to always show or `false` to always hide the empty option.
	 */
	showEmptyOption?: boolean;
};

export type DBSelectOptionType = {
	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * Disables this option
	 */
	disabled?: boolean;

	/**
	 * Selects this option
	 */
	selected?: boolean;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	/**
	 * If you want to use optgroup you can nest options here.
	 */
	options?: DBSelectOptionType[];

	/**
	 * The main value you select, will be shown as default label if no label is set.
	 */
	value: string | string[] | number;
};

export type DBSelectProps = GlobalProps &
	ClickEventProps<HTMLSelectElement> &
	ChangeEventProps<HTMLSelectElement> &
	FocusEventProps<HTMLSelectElement> &
	InputEventProps<HTMLSelectElement> &
	FormProps &
	IconProps &
	FormMessageProps &
	DBSelectDefaultProps &
	ShowIconProps &
	FormSizeProps;

export type DBSelectDefaultState = {
	_placeholderId: string;
	getOptionLabel: (option: DBSelectOptionType) => string;
	shouldShowEmptyOption: () => boolean;
};

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState<HTMLSelectElement> &
	ChangeEventState<HTMLSelectElement> &
	FocusEventState<HTMLSelectElement> &
	InputEventState<HTMLSelectElement> &
	FormState &
	InitializedState &
	FromValidState;
