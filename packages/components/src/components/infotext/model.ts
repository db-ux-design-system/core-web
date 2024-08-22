import {
	SemanticProps,
	GlobalProps,
	GlobalState,
	IconProps,
	SizeProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	SemanticProps &
	IconProps &
	SizeProps;

export interface DBInfotextDefaultState {}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
