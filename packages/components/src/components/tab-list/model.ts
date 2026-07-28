import type {
	GlobalProps,
	GlobalState,
	OrientationProps
} from '../../shared/model';

export type DBTabListProps = GlobalProps & OrientationProps;

export interface DBTabListState extends GlobalState {
	_id?: string;
}
