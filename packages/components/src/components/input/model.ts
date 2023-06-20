import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantType,
	FormProps,
	FormState,
	IconProps,
	IconState,
	DefaultVariantProps,
	KeyValueType,
	IconAfterProps
} from '../../shared/model';

export type DBInputDefaultProps = {
	dataList?: KeyValueType[];
	dataListId?: string;
	description?: string;
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
		| 'week';
	value?: any;
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
	DefaultVariantProps;

export type DBInputDefaultState = {
	_dataListId?: string;
	_value?: any;
	getIcon: (variant?: DefaultVariantType) => string;
};

export type DBInputState = DBInputDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState &
	IconState;
