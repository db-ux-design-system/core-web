export type DBCardDefaultProps = {
	colorVariant?: string;
	variant?: 'w-full' | 'ia';
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
