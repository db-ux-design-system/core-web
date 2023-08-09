import {
	ChangeEventProps,
	ChangeEventState,
	DefaultVariantProps,
	DefaultVariantType,
	FocusEventProps,
	FocusEventState,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	GlobalTextProps,
	IconProps,
	IconState,
	ValidEventProps
} from '../../shared/model';

export interface DBTextareaDefaultProps {
	cols?: number;
	infomsg?: string;
	rows?: number;
	variant?: DefaultVariantProps;
}

export type DBTextareaProps = DBTextareaDefaultProps &
	ChangeEventProps &
	DefaultVariantProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	GlobalProps &
	GlobalTextProps &
	IconProps;

export interface DBTextareaDefaultState {
	_infomsg: string;
	getIcon: (variant?: DefaultVariantType) => string;
}

export type DBTextareaState = DBTextareaDefaultState &
	ChangeEventState &
	FocusEventState &
	FormState &
	GlobalState &
	IconState;
