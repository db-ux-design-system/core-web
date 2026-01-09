import { GlobalProps } from '../../shared/model';

export type DBTabListDefaultProps = {};

export type DBTabListProps = DBTabListDefaultProps & GlobalProps;

export interface DBTabListState {
	_id?: string;
}
