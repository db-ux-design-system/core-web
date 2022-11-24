export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	variant?: string;
	children?: any;
};

export type DBButtonWcProps = {
	stylePath?: string;
};

export type DBButtonProps = DBButtonDefaultProps & DBButtonWcProps;

export type DBButtonState = {
	stylePath?: string;
};
