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
	IconAfterProps,
	IconProps,
	IconVisibleState,
	KeyValueType,
	ValidEventProps
} from '../../shared/model';

export type DBInputDefaultProps = {
	dataList?: KeyValueType[];
	dataListId?: string;
	type?:
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file' // TODO: move this to own component
		| 'hidden'
		| 'month'
		| 'number'
		| 'password'
		| 'range' // TODO: move this to own component
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| string;
	step?: number | string;
	variant?: DefaultVariantProps;
};

export type DBInputProps = DBInputDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	IconProps &
	IconAfterProps &
	DefaultVariantProps &
	FormMessageProps &
	FormReadonlyProps;

export type DBInputDefaultState = {
	_dataListId?: string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	IconVisibleState;
