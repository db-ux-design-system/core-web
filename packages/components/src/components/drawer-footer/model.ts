import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBDrawerFooterDefaultProps = {};

export type DBDrawerFooterProps = DBDrawerFooterDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBDrawerFooterDefaultState = {};

export type DBDrawerFooterState = DBDrawerFooterDefaultState & GlobalState;
