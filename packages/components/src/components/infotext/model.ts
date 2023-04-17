import {
	DefaultVariantProps,
	GlobalProps,
	GlobalState,
	IconProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {
	/**
	 * The size attribute changes the font-size of the infotext and hides the icon for size="small".
	 */
	size?: 'medium' | 'small';
	variant?: 'adaptive' | DefaultVariantProps;
}

export type DBInfotextProps = DBInfotextDefaultProps & GlobalProps & IconProps;

export interface DBInfotextDefaultState {
	getIcon: (
		icon?: string,
		variant?: 'adaptive' | DefaultVariantProps
	) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
