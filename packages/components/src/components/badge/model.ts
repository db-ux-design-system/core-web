import {
	DefaultVariantProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	SizeProps
} from '../../shared/model';

export interface DBBadgeDefaultProps {
	placement?:
		| 'inline'
		| 'corner-top-left'
		| 'corner-top-right'
		| 'corner-center-left'
		| 'corner-center-right'
		| 'corner-bottom-left'
		| 'corner-bottom-right';
}

export type DBBadgeProps = DBBadgeDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	SizeProps &
	EmphasisProps;

export interface DBBadgeDefaultState {}

export type DBBadgeState = DBBadgeDefaultState & GlobalState;
