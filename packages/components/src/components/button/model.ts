import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	WidthProps
} from '../../shared/model';

// TODO: 👇 Find a way to make react-docgen work without duplicating the types below
enum buttonVariants {
	'outlined' = 'outlined',
	'primary' = 'primary',
	'solid' = 'solid',
	'text' = 'text'
}
export const buttonVariantsList = Object.values(buttonVariants);
type ButtonVariantsType = 'outlined' | 'primary' | 'solid' | 'text';

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
	disabled?: boolean;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean; // We had to rename this to noText because web-components uses a regex and always finds "icon" instead of "onlyIcon"

	/**
	 * The label represents the [aria-label attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) value of the button
	 */
	label?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 */
	name?: string;

	/**
	 * The type attribute specifies the [type of button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type).
	 */
	type?: 'button' | 'reset' | 'submit';

	/**
	 * The value attribute specifies an initial [value for the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value).
	 */
	value?: string;

	/**
	 * Show loading progress inside button.
	 */
	state?: 'loading';

	/**
	 * The size of the button
	 */
	size?: 'small';

	/**
	 * Variant of the button. Use only 1 primary button on a page as CTA otherwise use one of the adaptive buttons.
	 */
	variant?: ButtonVariantsType;
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps &
	IconProps &
	WidthProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState;
