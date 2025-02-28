import {
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	FormProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export const MultiSelectListItemTypeList = ['checkbox', 'radio'] as const;
export type MultiSelectListItemTypeType =
	(typeof MultiSelectListItemTypeList)[number];

export interface DBMultiSelectListItemDefaultProps {
	groupLabel?: string;
	type?: MultiSelectListItemTypeType;
}

export type DBMultiSelectListItemProps = DBMultiSelectListItemDefaultProps &
	GlobalProps &
	Omit<FormProps, 'customValidity' | 'form' | 'required'> &
	Omit<FormCheckProps, 'variant'> &
	ChangeEventProps<HTMLInputElement>;

export interface DBMultiSelectListItemDefaultState {}

export type DBMultiSelectListItemState = DBMultiSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
