import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBPageDefaultProps {
	type?: 'fixedHeaderFooter';
	slotHeader?: any;
	slotFooter?: any;
}

export type DBPageProps = DBPageDefaultProps & GlobalProps;

export interface DBPageDefaultState {}

export type DBPageState = DBPageDefaultState & GlobalState;
