import type {
	ClickEventProps,
	GlobalProps,
	GlobalState,
	IconLeadingProps,
	IconProps,
	IconTrailingProps,
	NoTextProps,
	ShowIconLeadingProps,
	ShowIconProps,
	ShowIconTrailingProps,
	SizeProps,
	TextProps,
	WidthProps,
	WrapProps
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

export type DBButtonSharedProps = {
	/**
	 * Variant of the button. Only use one primary button as a CTA on a page; otherwise, use one of the adaptive buttons.
	 */
	variant?: ButtonVariantType | string;
};

export type DBButtonDefaultProps = {
	/**
	 * The [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) attribute specifies the action to perform on the element controlled by a `<button>` element.
	 */
	command?: string;

	/**
	 * The [commandfor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) attribute turns a `<button>` into a command button that controls the given interactive element referenced by `id`.
	 */
	commandfor?: string;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean | string;
	/**
	 * 	Associates the control with a form element
	 */
	form?: string;

	/**
	 * The [formaction](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction) attribute overrides the form's `action` for this button.
	 */
	formaction?: string;

	/**
	 * The [formenctype](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formenctype) attribute overrides the form's `enctype` for this button.
	 */
	formenctype?: string;

	/**
	 * The [formmethod](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formmethod) attribute overrides the form's `method` for this button (e.g. `"dialog"` to close a dialog).
	 */
	formmethod?: string;

	/**
	 * The [formnovalidate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formnovalidate) attribute overrides the form's `novalidate` for this button.
	 */
	formnovalidate?: boolean | string;

	/**
	 * The [formtarget](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formtarget) attribute overrides the form's `target` for this button.
	 */
	formtarget?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 */
	name?: string;

	/**
	 * The type attribute specifies the [type of button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type).
	 */
	type?: ButtonTypeType;

	/**
	 * The value attribute specifies an initial [value for the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value).
	 */
	value?: string;
};

export type DBButtonProps = DBButtonDefaultProps &
	DBButtonSharedProps &
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
	IconTrailingProps &
	WrapProps &
	NoTextProps;

export type DBButtonDefaultState = {
	getButtonType: () => ButtonTypeType;
};

export type DBButtonState = DBButtonDefaultState & GlobalState;
