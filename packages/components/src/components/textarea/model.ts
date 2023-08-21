import {
	ChangeEventProps,
	ChangeEventState,
	DefaultVariantProps,
	FocusEventProps,
	FocusEventState,
	FormMessageProps,
	FormProps,
	FormReadonlyProps,
	FormState,
	GlobalProps,
	GlobalState,
	GlobalTextProps,
	IconProps,
	IconVariantState,
	IconVisibleState,
	OverflowProps,
	ValidEventProps
} from '../../shared/model';

export interface DBTextareaDefaultProps {
	autoComplete?: 'on' | 'off';
	autoFocus?: boolean;
	cols?: number;
	rows?: number;
	resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

export type DBTextareaProps = DBTextareaDefaultProps &
	ChangeEventProps &
	DefaultVariantProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	GlobalProps &
	GlobalTextProps &
	FormMessageProps &
	OverflowProps &
	FormReadonlyProps;

export interface DBTextareaDefaultState {}

export type DBTextareaState = DBTextareaDefaultState &
	ChangeEventState &
	FocusEventState &
	FormState &
	GlobalState &
	IconVisibleState &
	IconVariantState;
