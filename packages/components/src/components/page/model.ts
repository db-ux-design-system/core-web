import { GlobalProps, GlobalState } from '../../shared/model';

export enum DBPageType {
	'FIXED_HEADER_FOOTER' = 'FIXED_HEADER_FOOTER'
}
export interface DBPageDefaultProps {
	type?: DBPageType;
	slotHeader?: any;
	slotFooter?: any;
}

export type DBPageProps = DBPageDefaultProps & GlobalProps;

export interface DBPageDefaultState {}

export type DBPageState = DBPageDefaultState & GlobalState;
