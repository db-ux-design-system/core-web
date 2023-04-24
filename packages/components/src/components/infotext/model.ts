import {
	DefaultVariantProps,
	DefaultVariantType,
	GlobalProps,
	GlobalState,
	IconProps
} from '../../shared/model';

export interface DBInfotextDefaultProps {
	/**
	 * The size attribute changes the font-size of the infotext and hides the icon for size="small".
	 */
	size?: 'medium' | 'small';
}

export type DBInfotextProps = DBInfotextDefaultProps &
	GlobalProps &
	DefaultVariantProps &
	IconProps;

export interface DBInfotextDefaultState {
	getIcon: (icon?: string, variant?: DefaultVariantType) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
