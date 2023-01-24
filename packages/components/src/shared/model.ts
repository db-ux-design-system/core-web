export type GlobalProps = {
	stylePath?: string;
	className?: string;
	children?: any;
};

export type GlobalState = {
	stylePath?: string;
};

export type GlobalTextProps = {
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
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
