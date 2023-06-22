import classNames from 'classnames';
import { IconTypes } from './icon-types';

export type GlobalProps = {
	/**
	 * default slot
	 */
	children?: any;

	/**
	 * React specific for adding className to the component.
	 */
	className?: string;

	/**
	 * [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) is used to link to the elements that describe the element with the set attribute.
	 */
	describedbyid?: string;

	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
	 */
	id?: string;

	/**
	 * React specific for render process.
	 */
	key?: string;

	/**
	 * Web Component specific: Adds a link tag with the path to show css inside Shadow DOM.
	 */
	stylePath?: string;

	/**
	 * The default tabindex (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de).
	 */
	tabIndex?: number;

	/**
	 * The [title attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) specifies the tooltip of the component.
	 */
	title?: string;
};

export type GlobalState = {
	_id?: string;
	stylePath?: string;
	getClassNames: (...args: classNames.ArgumentArray) => string;
};

export type DefaultVariantType =
	| 'adaptive'
	| 'critical'
	| 'informational'
	| 'warning'
	| 'successful';
export type DefaultVariantProps = {
	/**
	 * The variant defines the default variants for most components.
	 */
	variant?: DefaultVariantType;
};

export const DefaultVariantsIcon: any = {
	critical: 'error',
	// TODO: 'error-triangle' will change to 'warning' soon
	warning: 'error-triangle',
	successful: 'check-circle',
	informational: 'info'
};

export type IconProps = {
	/**
	 * Define an icon by it's identifier (like e.g. _account_, compare to [Icons](https://db-ui.github.io/mono/review/main/foundations/icons) to get displayed in front of the elements content.
	 */
	icon?: IconTypes;
};

export type IconAfterProps = {
	/**
	 * Define an icon by it's identifier (like e.g. _account_, compare to [Icons](https://db-ui.github.io/mono/review/main/foundations/icons) to get displayed in front of the elements content.
	 */
	iconAfter?: IconTypes;
};

export type IconState = {
	iconVisible: (icon?: string) => boolean;
};

export type WidthProps = {
	/**
	 * Width of the component. Auto width based on children size, full width based on parent elements width.
	 */
	width?: 'full' | 'auto';
};

export type FormProps = {
	/**
	 * React specific attribute to set default value.
	 */
	defaultValue?: any;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the form element.
	 */
	disabled?: boolean;

	/**
	 * The label attribute specifies the caption of the form element.
	 */
	label?: string;
	/**
	 * The name attribute gives the name of the form control, as used in form submission and in the form element's elements object.
	 */
	name?: string;
	/**
	 * When the required attribute specified, the user will be required to fill the form element before submitting the form.
	 */
	required?: boolean;
	/**
	 * The value property is to receive results from the native form element.
	 */
	value?: any;

	/**
	 * Marks an input element as invalid.
	 */
	invalid?: boolean;
};

export type FormCheckProps = {
	/**
	 * Define the radio or checkbox elements checked state
	 */
	checked?: boolean;
};

export type FormState = {
	_isValid?: boolean | undefined;
	_value?: any;
};

export type InitializedState = {
	initialized: boolean;
};

export type GlobalTextProps = {
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
	max?: number;
	min?: number;
	pattern?: string;
};

export type ImageProps = {
	/**
	 * [Alternative text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) for an image.
	 */
	imgAlt?: string;
	/**
	 * The [height attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/height) for the image.
	 */
	imgHeight?: number;
	/**
	 * The [source](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src) of an image.
	 */
	imgSrc?: string;
	/**
	 * The [width attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/width) for the image.
	 */
	imgWidth?: number;
};

export type LinkProps = {
	current?:
		| boolean
		| 'time'
		| 'true'
		| 'false'
		| 'date'
		| 'page'
		| 'step'
		| 'location'
		| undefined;
	disabled?: boolean;
	href?: string;
	hreflang?: string;
	label?: string;
	target?: '_self' | '_blank' | '_parent' | '_top';
	rel?: string;
	role?: string;
	referrerpolicy?:
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';
	selected?: boolean;
	text?: string;
};

export type CardProps = {
	/**
	 * The elevation attribute changes the style of the card (box-shadow).
	 */
	elevation?: 'default' | 'none';
};

export type ClickEventProps = {
	/**
	 * React specific onClick to pass to forward ref.
	 */
	onClick?: (event: any) => void;
};

export type ClickEventState = {
	handleClick: (event: any) => void;
};

export type ToggleEventProps = {
	onToggle?: (open: boolean) => void;
};

export type ToggleEventState = {
	toggle?: () => void;
};

export type CloseEventProps = {
	/**
	 * Function to handle button click (close).
	 */
	onClose?: () => void;
};

export type CloseEventState = {
	handleClose?: (event: any) => void;
};

export type ChangeEventProps = {
	change?: (event: any) => void;
	onChange?: (event: any) => void;
};

export type ChangeEventState = {
	handleChange: (event: any) => void;
};

export type FocusEventProps = {
	blur?: (event: any) => void;
	onBlur?: (event: any) => void;
	focus?: (event: any) => void;
	onFocus?: (event: any) => void;
};

export type FocusEventState = {
	handleBlur: (event: any) => void;
	handleFocus: (event: any) => void;
};

export type ValidEventProps = {
	validityChange?: (valid: boolean) => void;
};

export type NestedRefComponentType = { getFormRef?: () => { current?: any } };

export type InnerCloseButtonProps = {
	/**
	 * The closeButtonId attribute changes the id inside the close button.
	 */
	closeButtonId?: string;
	/**
	 * The closeButtonText attribute changes the text inside the close button.
	 */
	closeButtonText?: string;
};

export type NavigationBackButtonProps = {
	/**
	 * The backButtonId attribute changes the id inside the back button.
	 */
	backButtonId?: string;
	/**
	 * The backButtonText attribute changes the text inside the back button.
	 */
	backButtonText?: string;
};

export type KeyValueType = {
	key: string;
	value?: string;
};
