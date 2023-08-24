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
		| 'text'
		| 'search'
		| 'number'
		| 'tel'
		| 'url'
		| 'email'
		| 'password'
		| 'hidden'
		| 'date'
		| 'datetime-local'
		| 'week'
		| 'color';
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
