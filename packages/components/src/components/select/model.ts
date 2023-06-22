import {
	FocusEventProps,
	FocusEventState,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState,
	DefaultVariantProps,
	IconProps,
	DefaultVariantType
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
	value: string | number | readonly string[];
};

export type DBSelectProps = DBSelectDefaultProps &
	GlobalProps &
	ClickEventProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	DefaultVariantProps &
	IconProps;

export interface DBSelectDefaultState {
	getIcon: (variant?: DefaultVariantType) => string;
	getOptionLabel: (option: DBSelectOptionType) => string;
}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState &
	ChangeEventState &
	FocusEventState &
	FormState;
