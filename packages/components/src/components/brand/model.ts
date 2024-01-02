import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBBrandDefaultProps {
	/* Disabled the default logo svg to pass in a custom img */
	hideLogo?: boolean;
}

export type DBBrandProps = DBBrandDefaultProps & GlobalProps;

export interface DBBrandDefaultState {}

export type DBBrandState = DBBrandDefaultState & GlobalState;
