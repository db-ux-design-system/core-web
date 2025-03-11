import {
	BaseFormProps,
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	FormProps,
	GlobalProps,
	GlobalState,
	IconProps,
	ValueProps
} from '../../shared/model';

export const MultiSelectListItemTypeList = ['checkbox', 'radio'] as const;
export type MultiSelectListItemTypeType =
	(typeof MultiSelectListItemTypeList)[number];

export type DBMultiSelectListItemExtraProps = {
	/**
	 * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
	 */
	divider?: boolean;
} & IconProps;

export type DBMultiSelectListItemDefaultProps = {
	groupLabel?: string;
	type?: MultiSelectListItemTypeType;
};

export type DBMultiSelectListItemProps = DBMultiSelectListItemDefaultProps &
	GlobalProps &
	BaseFormProps &
	ValueProps &
	FormCheckProps &
	ChangeEventProps<HTMLInputElement> &
	DBMultiSelectListItemExtraProps;

export type DBMultiSelectListItemDefaultState = {
	getIconAfter: () => string | undefined;
};

export type DBMultiSelectListItemState = DBMultiSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
