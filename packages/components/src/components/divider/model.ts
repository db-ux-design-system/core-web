import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBDividerDefaultProps {
	margin?: 'none';
	variant?: 'horizontal' | 'vertical';
}

export type DBDividerProps = DBDividerDefaultProps & GlobalProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
