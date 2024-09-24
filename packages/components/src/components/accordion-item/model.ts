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
	 * Initial state for the accordion item
	 */
	defaultOpen?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	/**
	 * Title of the accordion-item as slot
	 */
	headline?: unknown;
	/**
	 * Title of the accordion-item as plain text
	 */
	headlinePlain?: string;
}

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionItemDefaultState {
	_open: boolean;
}

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement>;
