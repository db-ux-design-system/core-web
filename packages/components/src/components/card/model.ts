export type DBCardDefaultProps = {
	colorVariant?: string;
	variant?: string;
	className?: string;
	children?: any;
};

export type DBCardWcProps = {
	stylePath?: string;
};

export type DBCardProps = DBCardDefaultProps & DBCardWcProps;

export type DBCardState = {
	stylePath?: string;
};
