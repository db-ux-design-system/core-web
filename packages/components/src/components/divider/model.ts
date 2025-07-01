import {
	EmphasisProps,
	GlobalProps,
	GlobalState,
	MarginProps,
	WidthProps
} from '../../shared/model';

export const DividerMarginList = ['none', '_'] as const;
export type DividerMarginType = (typeof DividerMarginList)[number];

export const DividerVariantList = ['horizontal', 'vertical'] as const;
export type DividerVariantType = (typeof DividerVariantList)[number];

export type DBDividerDefaultProps = {
	/**
	 * Removes the margin of the divider.
	 */
	margin?: DividerMarginType;
	/**
	 * Changes the orientation of the divider.
	 */
	variant?: DividerVariantType;
};

export type DBDividerProps = DBDividerDefaultProps &
	GlobalProps &
	EmphasisProps &
	MarginProps &
	WidthProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
