import {
	DefaultVariantProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	SizeProps
} from '../../shared/model';

export interface DBBadgeDefaultProps {
	/**
	 * Workaround property for angular to force a dot style without any text in it.
	 * Angular adds a comment with binding to the component which disables the :empty css selector.
	 */
	noText?: boolean;

	/**
	 * The corner attributes changes the position to absolute and adds a transform based on the placement.
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
	DefaultVariantProps &
	SizeProps &
	EmphasisProps;

export interface DBBadgeDefaultState {}

export type DBBadgeState = DBBadgeDefaultState & GlobalState;
