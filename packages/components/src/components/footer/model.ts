import type {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBFooterDefaultProps = {};

export type DBFooterProps = DBFooterDefaultProps &
	GlobalProps &
	MaterialProps &
	ContainerWidthProps;

export type DBFooterDefaultState = {};
export type DBFooterState = DBFooterDefaultState & GlobalState;
