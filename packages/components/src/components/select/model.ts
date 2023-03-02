import {
	FocusEventProps,
	FocusEventState,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBSelectDefaultProps {
	className?: string;
	// TODO: Variants aren't being used by inputs as well, so we need to wait for the final spec
	// variant?: 'semitransparent' | 'white' | 'solid' | 'outline';
	ariainvalid?: false;
	disabled?: false;
	id?: string;
	multiple?: false;
	name?: string;
	required?: false;
	size?: 'small';
	label?: string;
	value?: any;
}

export type DBSelectProps = DBSelectDefaultProps &
	GlobalProps &
	ClickEventProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps;

export interface DBSelectDefaultState {
	mId?: string;
	_isValid: boolean | undefined;
	_value: any;
	_label: string;
}

export type DBSelectState = DBSelectDefaultState &
	GlobalState &
	ClickEventState &
	ChangeEventState &
	FocusEventState;
