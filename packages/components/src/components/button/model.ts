export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	variant?: string;
	className?: string;
	children?: any;
};

export type DBButtonWcProps = {
	stylePath?: string;
};

export type DBButtonProps = DBButtonDefaultProps & DBButtonWcProps;

export type DBButtonState = {
	stylePath?: string;
};
