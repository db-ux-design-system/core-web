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
	 * Enable multiple select -> use DBCustomSelect/db-custom-select for a better look
	 */
	multiple?: boolean;

	/**
	 * If you don't/can't use children/slots you can pass in the options as an array.
	 */
	options?: DBSelectOptionType[];
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
};

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState<HTMLSelectElement> &
	ChangeEventState<HTMLSelectElement> &
	FocusEventState<HTMLSelectElement> &
	InputEventState<HTMLSelectElement> &
	FormState &
	InitializedState;
