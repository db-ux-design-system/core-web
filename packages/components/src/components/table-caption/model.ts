import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBTableCaptionDefaultProps = {};

export type DBTableCaptionProps = DBTableCaptionDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBTableCaptionDefaultState = {};

export type DBTableCaptionState = DBTableCaptionDefaultState & GlobalState;
