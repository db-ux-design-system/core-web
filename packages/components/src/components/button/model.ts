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

/**
 * @module Button
 */

/**
 * Represents the list of possible button variants.
 * These variants define the visual style of the button.
 * @public
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
 * @public
 */
export type ButtonVariantType = (typeof ButtonVariantList)[number];

/**
 * Represents the list of possible button types.
 * These types define the behavior of the button.
 * @public
 */
export const ButtonTypeList = ['button', 'reset', 'submit'] as const;
/**
 * Type representing a single button type.
 * It is derived from the `ButtonTypeList` array.
 * @public
 */
export type ButtonTypeType = (typeof ButtonTypeList)[number];

/**
 * Represents the list of possible button states.
 * These states define the current status of the button.
 * @public
 */
export const ButtonStateList = ['loading'] as const;
/**
 * Type representing a single button state.
 * It is derived from the `ButtonStateList` array.
 * @public
 */
export type ButtonStateType = (typeof ButtonStateList)[number];

/**
 * Represents the default properties for the DBButton component.
 * These properties define the behavior and accessibility attributes of the button.
 */
export type DBButtonDefaultProps = {
	/**
	 * The disabled attribute can be set to [keep a user from clicking on the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 * @see https://developer.mozilla.org/docs/Web/HTML/Element/button#disabled
	 */
	disabled?: boolean | string;

	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * The label represents the [aria-label attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) value of the button
	 * @see https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-label
	 */
	label?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 * @see https://developer.mozilla.org/docs/Web/HTML/Element/button#name
	 */
	name?: string;

	/**
	 * If `true`, hides the text and shows only the icon.
	 */
	noText?: boolean | string;

	/**
	 * The type attribute specifies the type of button.
	 * @see https://developer.mozilla.org/docs/Web/HTML/Element/button#type
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
 * @public
 */
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

/**
 * Represents the default state of the `DBButton` component.
 * Currently, it is an empty object.
 * @internal
 */
export type DBButtonDefaultState = {
	getButtonType: () => ButtonTypeType;
};

/**
 * Represents the state for the `DBButton` component.
 * Combines the default state (`DBButtonDefaultState`) with global state and click event state properties.
 * @internal
 */
export type DBButtonState = DBButtonDefaultState & GlobalState;
