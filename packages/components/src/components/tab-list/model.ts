import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabListDefaultProps = {};

export type DBTabListProps = DBTabListDefaultProps & GlobalProps;

export type DBTabListDefaultState = {
	handleKeydown: (event: any) => void;
};

export type DBTabListState = DBTabListDefaultState & GlobalState;
