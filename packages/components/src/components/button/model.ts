import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	ShowIconProps,
	SizeProps,
	TextProps,
	WidthProps
} from '../../shared/model';

/**
 * Represents the list of possible button variants.
 * These variants define the visual style of the button.
 */
export const ButtonVariantList = [
	'outlined',
	'brand',
	'filled',
	'ghost'
] as const;
/**
 * Type representing a single button variant.
 * It is derived from the `ButtonVariantList` array.
 */
export type ButtonVariantType = (typeof ButtonVariantList)[number];

/**
 * Represents the list of possible button types.
 * These types define the behavior of the button.
 */
export const ButtonTypeList = ['button', 'reset', 'submit'] as const;
/**
 * Type representing a single button type.
 * It is derived from the `ButtonTypeList` array.
 */
export type ButtonTypeType = (typeof ButtonTypeList)[number];

/**
 * Represents the list of possible button states.
 * These states define the current status of the button.
 */
export const ButtonStateList = ['loading'] as const;
/**
 * Type representing a single button state.
 * It is derived from the `ButtonStateList` array.
 */
export type ButtonStateType = (typeof ButtonStateList)[number];

/**
 * Represents the default properties for the DBButton component.
 * These properties define the behavior and accessibility attributes of the button.
 */
export type DBButtonDefaultProps = {
	/**
	 * If the button controls a grouping of other elements, the ariaexpanded state [indicates whether the controlled grouping is currently expanded or collapsed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded).
	 */
	ariaexpanded?: boolean;

	/**
	 * Defines the button as a toggle button. The value of [ariapressed describes the state of the button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed).
	 */
	ariapressed?: boolean;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean | string;

	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * The label represents the [aria-label attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) value of the button
	 */
	label?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 */
	name?: string;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean | string;

	/**
	 * Show loading progress inside button.
	 */
	state?: ButtonStateType;

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
};

/**
 * Represents the properties for the `DBButton` component.
 * Combines default button properties (`DBButtonDefaultProps`) with global, click event, icon, width, size, show icon, and text-related properties.
 */
export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	SizeProps &
	ShowIconProps &
	TextProps;

/**
 * Represents the default state of the `DBButton` component.
 * Currently, it is an empty object.
 */
export type DBButtonDefaultState = {};

/**
 * Represents the state for the `DBButton` component.
 * Combines the default state (`DBButtonDefaultState`) with global state and click event state properties.
 */
export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState<HTMLButtonElement>;
