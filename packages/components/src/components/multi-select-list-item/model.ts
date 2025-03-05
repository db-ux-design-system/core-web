import {
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	FormProps,
	GlobalProps,
	GlobalState,
	IconProps
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

export interface DBMultiSelectListItemDefaultProps {
	groupLabel?: string;
	type?: MultiSelectListItemTypeType;
}

export type DBMultiSelectListItemProps = DBMultiSelectListItemDefaultProps &
	GlobalProps &
	Omit<FormProps, 'customValidity' | 'form' | 'required'> &
	Omit<FormCheckProps, 'variant'> &
	ChangeEventProps<HTMLInputElement> &
	DBMultiSelectListItemExtraProps;

export interface DBMultiSelectListItemDefaultState {
	getIconAfter: () => string | undefined;
}

export type DBMultiSelectListItemState = DBMultiSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
