import type {
	ColorState,
	GlobalProps,
	GlobalState,
	IconProps,
	MaterialProps,
	SemanticProps,
	ShowIconProps,
	SizeProps,
	TextProps,
	WrapProps
} from '../../shared/model';

export type DBInfotextDefaultProps = {};

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	MaterialProps &
	SemanticProps &
	IconProps &
	SizeProps &
	ShowIconProps &
	TextProps &
	WrapProps;

export type DBInfotextDefaultState = {};

export type DBInfotextState = DBInfotextDefaultState & GlobalState & ColorState;
