import {
	DefaultVariantProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	SizeProps
} from '../../shared/model';

export interface DBBadgeDefaultProps {}

export type DBBadgeProps = DBBadgeDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	SizeProps &
	EmphasisProps;

export interface DBBadgeDefaultState {}

export type DBBadgeState = DBBadgeDefaultState & GlobalState;
