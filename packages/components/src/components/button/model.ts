export type DBButtonDefaultProps = {
	text?: string;
	icon?: string;
	onlyIcon?: boolean;
	state?: 'loading';
	size?: 'small';
	width?: 'full';
	variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
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
