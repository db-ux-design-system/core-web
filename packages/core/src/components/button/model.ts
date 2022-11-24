export interface DBButtonDefaultProps {
	text?: string;
	icon?: string;
	onlyIcon?: boolean;
	state?: 'loading';
	size?: 'small';
	width?: 'full';
	variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
	children?: any;
}

export interface DBButtonWcProps {
	stylePath?: string;
}

export type DBButtonProps = DBButtonDefaultProps & DBButtonWcProps;

export interface DBButtonState {
	stylePath?: string;
}
