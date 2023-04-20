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
	disabled?: boolean;
	label?: string;
	options?: DBSelectOptionType[];
	value: string;
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
}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState &
	ChangeEventState &
	FocusEventState &
	FormState;
