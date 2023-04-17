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
	 * React specific for render process.
	 */
	key?: string;

	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
	 */
	id?: string;

	/**
	 * Web Component specific: Adds a link tag with the path to show css inside Shadow DOM.
	 */
	stylePath?: string;

	/**
	 * The [title attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) specifies the tooltip of the component.
	 */
	title?: string;
};

export type GlobalState = {
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

export type IconState = {
	iconVisible: (icon?: string) => boolean;
};

export type FormProps = {
	label?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	name?: string;
};

export type FormState = {
	_id?: string;
	_isValid?: boolean | undefined;
	_value?: any;
};

export type GlobalTextProps = {
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
};

export type ImageProps = {
	imgAlt?: string;
	imgSrc?: string;
	imgHeight?: number;
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
};

export type CardProps = {
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
