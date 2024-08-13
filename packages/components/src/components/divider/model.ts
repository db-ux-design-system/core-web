import {
	EmphasisProps,
	GlobalProps,
	GlobalState,
	MarginProps
} from '../../shared/model';

export const DividerVariantList = ['horizontal', 'vertical'] as const;
export type DividerVariantType = (typeof DividerVariantList)[number];

export type DBDividerDefaultProps = {
	variant?: DividerVariantType;
};

export type DBDividerProps = DBDividerDefaultProps &
	GlobalProps &
	EmphasisProps &
	MarginProps;

export type DBDividerDefaultState = {};

export type DBDividerState = DBDividerDefaultState & GlobalState;
