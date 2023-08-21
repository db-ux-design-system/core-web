import {
	DefaultVariantProps,
	DefaultVariantType,
	GlobalProps,
	GlobalState,
	IconProps,
	IconVariantState,
	SizeProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	IconProps &
	SizeProps;

export interface DBInfotextDefaultState {}

export type DBInfotextState = DBInfotextDefaultState &
	GlobalState &
	IconVariantState;
