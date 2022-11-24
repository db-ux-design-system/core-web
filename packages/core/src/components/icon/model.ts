export interface DBIconDefaultProps {
	icon?: string;
}

export interface DBIconWcProps {
	stylePath?: string;
}

export type DBIconProps = DBIconDefaultProps & DBIconWcProps;

export interface DBIconState {
	stylePath?: string;
}
