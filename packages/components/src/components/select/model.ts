import {
	ChangeEventProps,
	ChangeEventState,
	ClickEventProps,
	ClickEventState,
	DefaultVariantProps,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	IconProps,
	ValidEventProps
} from '../../shared/model';

export interface DBSelectDefaultProps {
	/**
	 * The description attribute will add a paragraph below the select.
	 */
	description?: string;

	/**
	 * If you don't/can't use children/slots you can pass in the options as an array.
	 */
	options?: DBSelectOptionType[];
}

export type DBSelectOptionType = {
	/**
	 * Disables this option
	 */
	// Disables this option
	disabled?: boolean;

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

export type DBSelectProps = DBSelectDefaultProps &
	GlobalProps &
	ClickEventProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	DefaultVariantProps &
	IconProps &
	FormMessageProps;

export interface DBSelectDefaultState {
	getOptionLabel: (option: DBSelectOptionType) => string;
	_value?: any;
}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState &
	ChangeEventState &
	FocusEventState &
	FormState;
