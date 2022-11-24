export type DBIconDefaultProps = {
	icon?: string;
};

export type DBIconWcProps = {
	stylePath?: string;
};

export type DBIconProps = DBIconDefaultProps & DBIconWcProps;

export type DBIconState = {
	stylePath?: string;
};
