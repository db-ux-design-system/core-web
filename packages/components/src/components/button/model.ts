import {
	ClickEventProps,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	SizeProps,
	TextProps,
	WidthProps
} from '../../shared/model';

export const ButtonVariantList = [
	'outlined',
	'brand',
	'filled',
	'ghost'
] as const;
export type ButtonVariantType = (typeof ButtonVariantList)[number];

export const ButtonTypeList = ['button', 'reset', 'submit'] as const;
export type ButtonTypeType = (typeof ButtonTypeList)[number];

export type DBButtonDefaultProps = {
	/**
	 * The disabled attribute can be set to [keep a user from clicking on the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean | string;

	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 */
	name?: string;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean | string;

	/**
	 * The type attribute specifies the [type of button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type).
	 */
	type?: ButtonTypeType;

	/**
	 * The value attribute specifies an initial [value for the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value).
	 */
	value?: string;

	/**
	 * Variant of the button. Use only 1 primary button on a page as CTA otherwise use one of the adaptive buttons.
	 */
	variant?: ButtonVariantType | string;

	/**
	 * Invoker Commands: `commandfor` attribute
	 */
	commandfor?: string;

	/**
	 * Invoker Commands: `command` attribute
	 */
	command?: string;
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	SizeProps &
	ShowIconProps &
	TextProps &
	ShowIconLeadingProps &
	ShowIconTrailingProps &
	IconLeadingProps &
	IconTrailingProps;

export type DBButtonDefaultState = {
	getButtonType: () => ButtonTypeType;
};

export type DBButtonState = DBButtonDefaultState & GlobalState;
