import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBInfotextDefaultProps {
	icon?: string;
	size?: 'medium' | 'small';

	title?: string;
	variant?: 'adaptive' | 'critical' | 'information' | 'warning' | 'success'; // TODO: Move this to global props
}

export type DBInfotextProps = DBInfotextDefaultProps & GlobalProps;

export interface DBInfotextDefaultState {
	getIcon: (
		icon?: string,
		variant?:
			| 'adaptive'
			| 'critical'
			| 'information'
			| 'warning'
			| 'success'
	) => string;
}

export type DBInfotextState = DBInfotextDefaultState & GlobalState;
