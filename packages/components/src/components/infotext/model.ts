import {
	DefaultVariantProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBInfotextDefaultProps {
	icon?: string;
	size?: 'medium' | 'small';

	title?: string;
	variant?: 'adaptive' | DefaultVariantProps;
}

export type DBInfotextProps = DBInfotextDefaultProps & GlobalProps;

export interface DBInfotextDefaultState {
	getIcon: (
		icon?: string,
		variant?: 'adaptive' | DefaultVariantProps
	) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
