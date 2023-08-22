import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBAccordionItemDefaultProps {
	content?: string;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	open?: boolean;
	slotTitle?: any;
	title?: string;
}

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionItemDefaultState {}

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState;
