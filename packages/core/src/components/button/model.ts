export interface DBButtonDefaultProps {
	text?: string;
	icon?: string;
	variant?: string;
	children?: any;
}

export interface DBButtonWcProps {
	stylePath?: string;
}

export type DBButtonProps = DBButtonDefaultProps & DBButtonWcProps;

export interface DBButtonState {
	stylePath?: string;
	makeAlert: () => void;
}
