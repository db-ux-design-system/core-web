import {
	GlobalProps,
	GlobalState,
	IconProps,
	SemanticProps,
	ShowIconProps,
	SizeProps,
	TextProps
} from '../../shared/model';

export type DBInfotextDefaultProps = {
	/**
	 * Angular specific: Show this infotext only when the specified FormControl error exists.
	 * When used inside db-input with FormControl, this allows conditional display of validation messages.
	 */
	error?: string;
};

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	SemanticProps &
	IconProps &
	SizeProps &
	ShowIconProps &
	TextProps;

export type DBInfotextDefaultState = {};

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
