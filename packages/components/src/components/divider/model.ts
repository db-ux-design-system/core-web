import { GlobalProps, GlobalState } from '../../shared/model';

export type DBDividerDefaultProps = {
	margin?: 'none' | '_';
	variant?: 'horizontal' | 'vertical';
};

export type DBDividerProps = DBDividerDefaultProps & GlobalProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
