export type GlobalProps = {
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
