export interface DBCardDefaultProps {
	colorVariant?: string;
	variant?: 'w-full' | 'ia';
	children?: any;
}

export interface DBCardWcProps {
	stylePath?: string;
}

export type DBCardProps = DBCardDefaultProps & DBCardWcProps;

export interface DBCardState {
	stylePath?: string;
}
