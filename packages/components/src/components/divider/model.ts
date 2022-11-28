export interface DBDividerDefaultProps {
	margin?: 'none';
	variant?: 'horizontal' | 'vertical';
	className?: string;
}

export interface DBDividerWcProps {
	stylePath?: string;
}

export type DBDividerProps = DBDividerDefaultProps & DBDividerWcProps;

export interface DBDividerState {
	stylePath?: string;
}
