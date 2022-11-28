export type DBIconDefaultProps = {
	icon?: string;
	className?: string;
};

export type DBIconWcProps = {
	stylePath?: string;
};

export type DBIconProps = DBIconDefaultProps & DBIconWcProps;

export type DBIconState = {
	stylePath?: string;
};
