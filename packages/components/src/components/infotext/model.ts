import {
	DefaultVariantProps,
	DefaultVariantType,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBInfotextDefaultProps {
	icon?: string;
	size?: 'medium' | 'small';
}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	DefaultVariantProps;

export interface DBInfotextDefaultState {
	getIcon: (icon?: string, variant?: DefaultVariantType) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
