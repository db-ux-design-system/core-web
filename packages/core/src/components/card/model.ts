export interface DBCardDefaultProps {
	colorVariant?: string;
	variant?: string;
	children?: any;
}

export interface DBCardWcProps {
	stylePath?: string;
}

export type DBCardProps = DBCardDefaultProps & DBCardWcProps;

export interface DBCardState {
	stylePath?: string;
}
