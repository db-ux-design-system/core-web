import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBAccordionDefaultProps {
	open?: boolean;
	summary?: string;
	isLastChild?: boolean;
}

export type DBAccordionProps = DBAccordionDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionDefaultState {
	_open: boolean;
}

export type DBAccordionState = DBAccordionDefaultState &
	GlobalState &
	ToggleEventState;
