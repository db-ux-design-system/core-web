import type {
GlobalProps,
GlobalState } from '../../shared/model';

export type DBDrawerFooterDefaultProps = {
}

export type DBDrawerFooterProps =
	DBDrawerFooterDefaultProps  &
	GlobalProps
	;

export type DBDrawerFooterDefaultState = {}

export type DBDrawerFooterState =
	DBDrawerFooterDefaultState &
	GlobalState
	;
