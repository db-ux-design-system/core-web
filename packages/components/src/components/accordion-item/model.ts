import {
	ToggleEventProps,
	ToggleEventState
} from './../../../../../build-outputs/react/dist/shared/model.d';
import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBAccordionItemDefaultProps {
	open?: boolean;
	slotSummary?: string;
	isLastChild?: boolean;
}

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionItemDefaultState {
	_open?: boolean;
}

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState;
