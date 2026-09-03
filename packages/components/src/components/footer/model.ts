import type {
	ContainerWidthProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export type DBFooterDefaultProps = {};

export type DBFooterProps = DBFooterDefaultProps &
	GlobalProps &
	ContainerWidthProps;

export type DBFooterDefaultState = {};
export type DBFooterState = DBFooterDefaultState & GlobalState;
