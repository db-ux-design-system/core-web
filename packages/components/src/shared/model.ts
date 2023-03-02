export type GlobalProps = {
	id?: string;
	title?: string;
	stylePath?: string;
	className?: string;
	children?: any;
};

export type GlobalState = {
	stylePath?: string;
};

export type DefaultVariantProps =
	| 'critical'
	| 'information'
	| 'warning'
	| 'success';

export const DefaultVariantsIcon: any = {
	critical: 'error',
	// TODO: 'error-triangle' will change to 'warning' soon
	warning: 'error-triangle',
	success: 'check-circle',
	information: 'info'
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
	_label?: string;
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

export type ClickEventProps = {
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
