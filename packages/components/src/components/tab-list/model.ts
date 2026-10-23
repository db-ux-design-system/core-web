import type {
	GlobalProps,
	GlobalState,
	MaterialProps,
	OrientationProps
} from '../../shared/model';

export type DBTabListProps = GlobalProps & MaterialProps & OrientationProps;

export interface DBTabListState extends GlobalState {
	_id?: string;
}
