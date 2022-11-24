export type DBCardDefaultProps = {
	colorVariant?: string;
	variant?: string;
	children?: any;
};

export type DBCardWcProps = {
	stylePath?: string;
};

export type DBCardProps = DBCardDefaultProps & DBCardWcProps;

export type DBCardState = {
	stylePath?: string;
};
