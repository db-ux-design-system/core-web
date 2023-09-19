import { EmphasisProps, GlobalProps, GlobalState } from '../../shared/model';

export type DBDividerDefaultProps = {
	margin?: 'none' | '_';
	variant?: 'horizontal' | 'vertical';
};

export type DBDividerProps = DBDividerDefaultProps &
	GlobalProps &
	EmphasisProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
