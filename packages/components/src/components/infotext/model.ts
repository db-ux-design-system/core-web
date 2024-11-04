import {
	GlobalProps,
	GlobalState,
	IconProps,
	SemanticProps,
	SizeProps
} from '../../shared/model';

export type DBInfotextDefaultProps = {};

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	SemanticProps &
	IconProps &
	SizeProps;

export type DBInfotextDefaultState = {};

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
