export interface DBIconDefaultProps {
	icon?: string;
	withText?: boolean;
	children?: any;
}

export interface DBIconWcProps {
	stylePath?: string;
}

export type DBIconProps = DBIconDefaultProps & DBIconWcProps;

export interface DBIconState {
	stylePath?: string;
}
