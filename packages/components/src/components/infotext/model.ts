import {
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	IconProps,
	SizeProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	IconProps &
	SizeProps;

export interface DBInfotextDefaultState {}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
