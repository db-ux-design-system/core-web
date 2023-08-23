import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBAccordionItemDefaultProps {
	/**
	 * Alternative for passing only a string instead of children
	 */
	content?: string;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	/**
	 * Initial state for the accordion item
	 */
	open?: boolean;
	/**
	 * For react only to pass any title element to the specific slot
	 */
	slotTitle?: any;
	/**
	 * Alternative for passing only a string instead of a slot
	 */
	title?: string;
}

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionItemDefaultState {}

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState;
