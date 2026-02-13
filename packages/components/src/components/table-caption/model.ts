import {
GlobalProps,
GlobalState } from '../../shared/model';

export type DBTableCaptionDefaultProps = {
}

export type DBTableCaptionProps =
	DBTableCaptionDefaultProps  &
	GlobalProps
	;

export type DBTableCaptionDefaultState = {}

export type DBTableCaptionState =
	DBTableCaptionDefaultState &
	GlobalState
	;
