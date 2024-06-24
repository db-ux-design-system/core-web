import {
	SemanticProps,
	EmphasisProps,
	GlobalProps,
	GlobalState,
	SizeProps,
	InitializedState
} from '../../shared/model';

export const BadgePlacementList = [
	'inline',
	'corner-top-left',
	'corner-top-right',
	'corner-center-left',
	'corner-center-right',
	'corner-bottom-left',
	'corner-bottom-right'
] as const;
export type BadgePlacementType = (typeof BadgePlacementList)[number];

export interface DBBadgeDefaultProps {
	/**
	 * The `placement` attributes `corner-*` values change the position to absolute and adds a transform based on the placement.
	 */
	placement?: BadgePlacementType;

	/**
	 * Describes the badge for a11y if you use placement attribute with `corner-*`
	 */
	label?: string;
}

export type DBBadgeProps = DBBadgeDefaultProps &
	GlobalProps &
	SemanticProps &
	SizeProps &
	EmphasisProps;

export interface DBBadgeDefaultState {}

export type DBBadgeState = DBBadgeDefaultState & GlobalState & InitializedState;
