import {
	DefaultVariantProps,
	DefaultVariantType,
	GlobalProps,
	GlobalState,
	IconProps,
	SizeProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	IconProps &
	SizeProps;

export interface DBInfotextDefaultState {
	getIcon: (icon?: string, variant?: DefaultVariantType) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
