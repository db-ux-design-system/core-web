import {
	SemanticProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	SizeProps
} from '../../shared/model';

export interface DBBadgeDefaultProps {
	/**
	 * The `placement` attributes `corner-*` values change the position to absolute and adds a transform based on the placement.
	 */
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
	SemanticProps &
	SizeProps &
	EmphasisProps;

export interface DBBadgeDefaultState {}

export type DBBadgeState = DBBadgeDefaultState & GlobalState;
