export type DBIconDefaultProps = {
	icon?: string;
	withText?: boolean;
	children?: any;
};

export type DBIconWcProps = {
	stylePath?: string;
};

export type DBIconProps = DBIconDefaultProps & DBIconWcProps;

export type DBIconState = {
	stylePath?: string;
};
