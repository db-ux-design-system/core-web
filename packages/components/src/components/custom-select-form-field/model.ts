import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBCustomSelectFormFieldDefaultProps = {};

export type DBCustomSelectFormFieldProps = DBCustomSelectFormFieldDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBCustomSelectFormFieldDefaultState = {};

export type DBCustomSelectFormFieldState = DBCustomSelectFormFieldDefaultState &
	GlobalState;
