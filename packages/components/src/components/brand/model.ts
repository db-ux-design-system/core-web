import {
	GlobalProps,
	GlobalState,
	NoTextProps,
	TextProps
} from '../../shared/model';

export type DBBrandDefaultProps = {};

export type DBBrandProps = DBBrandDefaultProps &
	GlobalProps &
	TextProps &
	NoTextProps;

export type DBBrandDefaultState = {};

export type DBBrandState = DBBrandDefaultState & GlobalState;
